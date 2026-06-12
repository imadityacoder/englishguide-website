import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://englishguidepatna.in"),
  title: "English Guide | Best Spoken English Coaching in Patna",
  description: "Improve spoken English, grammar, confidence, personality development, and interview skills with English Guide in Patna. Patna's trusted coaching institute.",
  keywords: [
    "Best Spoken English Classes in Patna",
    "English Coaching in Patna",
    "Spoken English Institute Patna",
    "English Speaking Course Patna",
    "Best English Coaching Patna",
    "Personality Development Classes Patna",
    "Interview Preparation Classes Patna",
    "Learn English Patna",
    "English grammar coaching Patna"
  ],
  authors: [{ name: "English Guide" }],
  alternates: {
    canonical: "https://englishguidepatna.in",
  },
  openGraph: {
    title: "English Guide | Best Spoken English Coaching in Patna",
    description: "Improve spoken English, grammar, confidence, personality development, and interview skills with English Guide in Patna.",
    url: "https://englishguidepatna.in",
    siteName: "English Guide",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "English Guide | Spoken English Coaching Patna",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "English Guide | Best Spoken English Coaching in Patna",
    description: "Improve spoken English, grammar, confidence, personality development, and interview skills with English Guide in Patna.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" }
    ],
    apple: [
      { url: "/icon.png", type: "image/png" }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#7B1E2B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://englishguidepatna.in/#website",
    "name": "English Guide",
    "url": "https://englishguidepatna.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://englishguidepatna.in/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://englishguidepatna.in/#organization",
    "name": "English Guide",
    "url": "https://englishguidepatna.in",
    "logo": "https://englishguidepatna.in/logo.png",
    "sameAs": [
      "https://www.facebook.com/englishguidepatna",
      "https://www.instagram.com/englishguidepatna"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-79032-29506",
      "contactType": "admissions",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": "https://englishguidepatna.in/#localbusiness",
    "name": "English Guide",
    "description": "Improve spoken English, grammar, confidence, personality development, and interview skills with English Guide in Patna. Patna's trusted coaching institute.",
    "url": "https://englishguidepatna.in",
    "logo": "https://englishguidepatna.in/logo.png",
    "image": "https://englishguidepatna.in/og-image.png",
    "telephone": "+917903229506",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "The Campus of Blue Star Collection, 6 Ashok Rajpath Road, Opposite Ammu Exide Battery Shop, Sultanganj, Tripolia",
      "addressLocality": "Patna",
      "addressRegion": "Bihar",
      "postalCode": "800006",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.6152536",
      "longitude": "85.1849416"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "07:00",
      "closes": "20:30"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "557"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://englishguidepatna.in/#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://englishguidepatna.in"
      }
    ]
  };

  const schemas = [websiteSchema, organizationSchema, localBusinessSchema, breadcrumbSchema];

  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
      </head>
      <body className="min-h-full font-poppins flex flex-col bg-bg-brand text-brand-text">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
