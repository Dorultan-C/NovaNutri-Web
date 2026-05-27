import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  
  // Detect iOS
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return NextResponse.redirect("https://apps.apple.com/us/app/riov-mediterranean-meal-plan/id6770679057");
  }
  
  // Detect Android
  if (/Android/.test(userAgent)) {
    return NextResponse.redirect("https://play.google.com/store/apps/details?id=com.riov.app");
  }

  // Fallback for desktop users who navigate directly to the link
  return NextResponse.redirect("https://riov.app");
}