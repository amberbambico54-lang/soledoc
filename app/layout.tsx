import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thesoledoctor.com"),
  title: "The Sole Doctor | Dr. Saylee Tulpule — Board-Certified Podiatrist",
  description:
    "Expert foot health advice, trusted shoe recommendations, and evidence-based foot care from Dr. Saylee Tulpule, a board-certified podiatrist.",
  keywords: "podiatrist, foot health, shoe recommendations, plantar fasciitis, heel pain, orthotics, Dr. Saylee Tulpule",
  openGraph: {
    title: "The Sole Doctor | Dr. Saylee Tulpule",
    description: "Expert foot health advice from a board-certified podiatrist.",
    url: "https://thesoledoctor.com",
    siteName: "The Sole Doctor",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Sole Doctor | Dr. Saylee Tulpule",
    description: "Expert foot health advice from a board-certified podiatrist.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Saylee Tulpule",
  description: "Board-certified podiatrist and footwear expert",
  url: "https://thesoledoctor.com",
  medicalSpecialty: "Podiatric Medicine",
  jobTitle: "Doctor of Podiatric Medicine",
  sameAs: [
    "https://instagram.com/thesoledoctor",
    "https://tiktok.com/@thesoledoctor",
    "https://youtube.com/@thesoledoctor",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
