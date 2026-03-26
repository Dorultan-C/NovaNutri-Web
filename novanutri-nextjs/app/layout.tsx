import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Update the Metadata for SEO and browser tabs!
export const metadata: Metadata = {
  title: "NovaNutri | Plan smarter. Eat better. Spend less.",
  description: "The AI-powered smart meal planner designed to turn viral social media recipes into budget-friendly, healthy family meals in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // Added "scroll-smooth" cleanly into the existing class string
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}