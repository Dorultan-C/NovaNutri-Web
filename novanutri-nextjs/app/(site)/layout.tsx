import type { Metadata } from "next";
import RootShell from "@/components/RootShell";

export const metadata: Metadata = {
  title: "Riov | Plan smarter. Eat better. Spend less.",
  description: "The AI-powered smart meal planner that builds budget-friendly, healthy weekly meal plans, tracks your nutrition, and organizes your grocery list.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootShell lang="en">{children}</RootShell>;
}
