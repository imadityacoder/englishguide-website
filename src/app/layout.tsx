import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://englishguidepatna.com"),
  title: "English Guide | Best Spoken English Coaching in Patna",
  description: "Improve spoken English, grammar, confidence, personality development, and interview skills with English Guide in Patna. Patna's trusted coaching institute.",
  keywords: [
    "English coaching in Patna",
    "Spoken English Patna",
    "Personality development Patna",
    "English Guide Patna",
    "Learn English Patna",
    "Best spoken English class Patna",
    "English grammar coaching Patna"
  ],
  authors: [{ name: "English Guide" }],
  openGraph: {
    title: "English Guide | Best Spoken English Coaching in Patna",
    description: "Improve spoken English, grammar, confidence, personality development, and interview skills with English Guide in Patna.",
    url: "https://englishguidepatna.com",
    siteName: "English Guide",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "English Guide | Spoken English Coaching Patna",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "English Guide",
    "description": "Patna's trusted spoken English coaching institute improving communication, confidence, grammar, personality development, and interview skills.",
    "url": "https://englishguidepatna.com",
    "telephone": "+917903229506",
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

  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full font-poppins flex flex-col bg-bg-brand text-brand-text">
        {children}
      </body>
    </html>
  );
}
