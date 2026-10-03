import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"; // 1. Import the component
import { Providers } from "./providers"; // Add the Providers import
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riov | Plan smarter. Eat better. Spend less.",
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Wrap the body contents with Providers */}
        <Providers>
          {children}
          <Analytics /> {/* 2. Drop it inside the body tag! */}
        </Providers>
      </body>
    </html>
  );
}