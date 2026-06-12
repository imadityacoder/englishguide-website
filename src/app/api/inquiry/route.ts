import { NextResponse } from "next/server";

// Simple in-memory token-bucket rate limiter
interface RateLimitBucket {
  tokens: number;
  lastRefill: number;
}

const rateLimitMap = new Map<string, RateLimitBucket>();
const RATE_LIMIT_WINDOW = 600000; // 10 minutes
const MAX_REQUESTS = 5;

// Clean up old rate limit entries to prevent memory leaks
function cleanupRateLimitMap() {
  const now = Date.now();
  for (const [ip, bucket] of rateLimitMap.entries()) {
    if (now - bucket.lastRefill > RATE_LIMIT_WINDOW) {
      rateLimitMap.delete(ip);
    }
  }
}

function checkRateLimit(ip: string): boolean {
  cleanupRateLimitMap();
  const now = Date.now();
  const bucket = rateLimitMap.get(ip);

  if (!bucket) {
    rateLimitMap.set(ip, { tokens: MAX_REQUESTS - 1, lastRefill: now });
    return true;
  }

  const timeElapsed = now - bucket.lastRefill;
  const tokensToAdd = Math.floor(timeElapsed / (RATE_LIMIT_WINDOW / MAX_REQUESTS));
  
  if (tokensToAdd > 0) {
    bucket.tokens = Math.min(MAX_REQUESTS, bucket.tokens + tokensToAdd);
    bucket.lastRefill = now;
  }

  if (bucket.tokens > 0) {
    bucket.tokens--;
    rateLimitMap.set(ip, bucket);
    return true;
  }

  return false;
}

// Basic input sanitization
function sanitizeString(str: string): string {
  if (!str) return "";
  return str
    .replace(/<[^>]*>/g, "") // Strip HTML tag syntax
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

const VALID_COURSES = [
  "Spoken English",
  "Personality Development",
  "Interview Preparation",
  "English Grammar",
];

export async function POST(request: Request) {
  try {
    // 1. Check Rate Limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "127.0.0.1";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many inquiries. Please try again after 10 minutes." },
        { status: 429 }
      );
    }

    // 2. Parse Body
    const body = await request.json();
    const { name, phone, course, message, website } = body;

    // 3. Honeypot check (website field is hidden from real users, if filled it is a spam bot)
    if (website) {
      console.warn(`Spam bot detected from IP: ${ip}. Honeypot triggered.`);
      // Return a fake success response to trick the bot
      return NextResponse.json({ success: true, message: "Inquiry submitted successfully!" });
    }

    // 4. Input Sanitization
    const sanitizedName = sanitizeString(name);
    const sanitizedPhone = sanitizeString(phone).replace(/[\s-+]/g, "");
    const sanitizedCourse = sanitizeString(course);
    const sanitizedMessage = sanitizeString(message);

    // 5. Validation Checks
    if (!sanitizedName || sanitizedName.length < 2 || sanitizedName.length > 100) {
      return NextResponse.json(
        { success: false, message: "Name must be between 2 and 100 characters." },
        { status: 400 }
      );
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!sanitizedPhone || !phoneRegex.test(sanitizedPhone)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid 10-digit Indian phone number." },
        { status: 400 }
      );
    }

    if (!VALID_COURSES.includes(sanitizedCourse)) {
      return NextResponse.json(
        { success: false, message: "Selected course is invalid." },
        { status: 400 }
      );
    }

    if (!sanitizedMessage || sanitizedMessage.length < 5 || sanitizedMessage.length > 1000) {
      return NextResponse.json(
        { success: false, message: "Message must be between 5 and 1000 characters." },
        { status: 400 }
      );
    }

    // 6. Access Token verification & Forwarding to Web3Forms
    const web3AccessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!web3AccessKey) {
      console.warn("WEB3FORMS_ACCESS_KEY is not defined in environment variables. Logging submission in development:");
      console.log({
        name: sanitizedName,
        phone: sanitizedPhone,
        course: sanitizedCourse,
        message: sanitizedMessage,
      });
      // Fallback for development testing
      return NextResponse.json({ success: true, message: "Inquiry registered (Dev Mode)." });
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: web3AccessKey,
        subject: `New Admission Inquiry: ${sanitizedCourse}`,
        from_name: "English Guide Web Server",
        name: sanitizedName,
        phone: sanitizedPhone,
        course: sanitizedCourse,
        message: sanitizedMessage,
      }),
    });

    const data = await response.json();
    if (data.success) {
      return NextResponse.json({ success: true, message: "Inquiry submitted successfully!" });
    } else {
      console.error("Web3Forms submission failed:", data);
      return NextResponse.json(
        { success: false, message: data.message || "Failed to forward inquiry to mailing server." },
        { status: 502 }
      );
    }
  } catch (err: any) {
    console.error("Inquiry route error:", err);
    return NextResponse.json(
      { success: false, message: "An internal server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
