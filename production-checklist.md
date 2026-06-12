# Production Deployment Checklist

Perform these checks prior to officially pointing production DNS domains to Vercel.

## 1. Security Verification
- [x] **CSP (Content Security Policy):** Headers present and allowing only trusted domains (self, GA4, Clarity, Maps).
- [x] **Strict Transport Security (HSTS):** Enforced with subdomains and preloading configured.
- [x] **Form Sanitization:** API sanitizes input to block XSS vector tags.
- [x] **Rate Limiting:** API successfully limits excess calls to `/api/inquiry` from a single IP.
- [x] **Honeypot Trap:** Spambots submitting hidden `website` fields are blocked silently without mailing overhead.
- [x] **Client-Side Protection:** No private API keys, environment parameters, or configs leaked on the client bundle.

## 2. Forms & Inquiries Testing
- [x] Input validations reject incomplete names (< 2 chars) and non-Indian format phone numbers.
- [x] Verified successful API request forwards to Web3Forms inbox.
- [x] Success state (Checkmark modal) displays instantly upon submission.
- [x] Error banner triggers if API returns a rate-limiting message (429) or server failures (500).

## 3. Speed & Performance Audit
- [x] Large assets compressed using sharp:
  - `logo.png` favicon/logo replacement (~10KB vs 4.9MB SVG)
  - `gallery_3.jpg` compressed (~219KB vs 2.7MB)
  - Hero background compressed (~50KB vs 220KB)
- [x] Hero image loads with `priority` and correct sizing tags to maximize LCP speeds.
- [x] Fonts are self-hosted natively via `next/font/google` to minimize layout shifts (CLS < 0.1).

## 4. Analytics & Event Triggers
- [x] GTM, GA4, and Microsoft Clarity load asynchronously without blocking the UI thread.
- [x] Custom conversion events successfully log on:
  - Phone call CTA clicks (`call_now_click`)
  - WhatsApp redirect clicks (`whatsapp_click`)
  - Inquiry form submissions (`form_submission_success`)
