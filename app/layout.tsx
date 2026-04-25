import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Simran Jeet Singh | Aesthetic Dentist in Gandhinagar & Ahmedabad",
    template: "%s | Dr. Simran Jeet Singh",
  },
  description:
    "Consulting aesthetic dentist in Gandhinagar & Ahmedabad. Smile design, veneers, teeth whitening, and cosmetic dentistry with ethical, evidence-based care.",
  keywords: [
    "Dr. Simran Jeet Singh",
    "Aesthetic dentist",
    "Cosmetic dentist",
    "Smile design",
    "Teeth whitening",
    "Veneers",
    "Gandhinagar dentist",
    "Ahmedabad dentist",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    title: "Dr. Simran Jeet Singh | Aesthetic Dentist in Gandhinagar & Ahmedabad",
    description:
      "Smile design, veneers, teeth whitening, and cosmetic dentistry with ethical, evidence-based care.",
    siteName: "Dr. Simran Jeet Singh",
  },
  twitter: {
    card: "summary",
    title: "Dr. Simran Jeet Singh | Aesthetic Dentist",
    description:
      "Smile design, veneers, teeth whitening, and cosmetic dentistry in Gandhinagar & Ahmedabad.",
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Dr. Simran Jeet Singh",
              areaServed: ["Gandhinagar", "Ahmedabad"],
              medicalSpecialty: "Aesthetic Dentistry",
            }),
          }}
        />
      </body>
    </html>
  );
}