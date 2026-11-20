"use client";

import { useId } from "react";

export type FlagId = "uk" | "es" | "catalonia" | "fr" | "it" | "ro" | "dk";

function Svg({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <svg viewBox="0 0 60 40" role="img" aria-label={label} focusable="false">
      {children}
    </svg>
  );
}

function UnitedKingdom() {
  const raw = useId().replace(/:/g, "");
  const clip = `uk-${raw}`;
  const saltire = `uk-s-${raw}`;
  return (
    <svg viewBox="0 0 60 30" role="img" aria-label="United Kingdom" focusable="false">
      <defs>
        <clipPath id={clip}>
          <path d="M0,0 h60 v30 h-60 z" />
        </clipPath>
        <clipPath id={saltire}>
          <path d="M30,15 h30 v15 z v-15 h-30 z h-30 v15 z v-15 h30 z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <path d="M0,0 h60 v30 h-60 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath={`url(#${saltire})`} />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

function Spain() {
  return (
    <Svg label="Spain">
      <rect width="60" height="40" fill="#AA151B" />
      <rect y="10" width="60" height="20" fill="#F1BF00" />
      <g transform="translate(14 13)">
        <path d="M4 1 h6 v7.5 a3 3 0 0 1-6 0 z" fill="#AA151B" />
        <rect x="3.2" y="3.2" width="7.6" height="1.6" fill="#F1BF00" />
        <rect x="5.8" y="3.2" width="1.5" height="6" fill="#F1BF00" />
        <path d="M5 0 h4 l-0.6 1.6 h-2.8 z" fill="#F1BF00" />
      </g>
    </Svg>
  );
}

function Catalonia() {
  const stripes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <svg viewBox="0 0 60 36" role="img" aria-label="Catalonia" focusable="false">
      {stripes.map((index) => (
        <rect
          key={index}
          y={index * 4}
          width="60"
          height="4"
          fill={index % 2 === 0 ? "#FCDD09" : "#DA121A"}
        />
      ))}
    </svg>
  );
}

function France() {
  return (
    <Svg label="France">
      <rect width="20" height="40" fill="#0055A4" />
      <rect x="20" width="20" height="40" fill="#fff" />
      <rect x="40" width="20" height="40" fill="#EF4135" />
    </Svg>
  );
}

function Italy() {
  return (
    <Svg label="Italy">
      <rect width="20" height="40" fill="#009246" />
      <rect x="20" width="20" height="40" fill="#fff" />
      <rect x="40" width="20" height="40" fill="#CE2B37" />
    </Svg>
  );
}

function Romania() {
  return (
    <Svg label="Romania">
      <rect width="20" height="40" fill="#002B7F" />
      <rect x="20" width="20" height="40" fill="#FCD116" />
      <rect x="40" width="20" height="40" fill="#CE1126" />
    </Svg>
  );
}

function Denmark() {
  return (
    <Svg label="Denmark">
      <rect width="60" height="40" fill="#C60C30" />
      <rect x="16" width="8" height="40" fill="#fff" />
      <rect y="16" width="60" height="8" fill="#fff" />
    </Svg>
  );
}

const FLAGS: Record<FlagId, () => React.JSX.Element> = {
  uk: UnitedKingdom,
  es: Spain,
  catalonia: Catalonia,
  fr: France,
  it: Italy,
  ro: Romania,
  dk: Denmark,
};

export function Flag({ id }: { id: FlagId }) {
  const Mark = FLAGS[id];
  return (
    <span className="flag-frame">
      <Mark />
    </span>
  );
}
