import { initializeApp, getApps, cert, type App } from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

/** True when all Firebase Admin credentials are present in the environment. */
export function hasAdminCredentials(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID &&
      process.env.FIREBASE_CLIENT_EMAIL &&
      process.env.FIREBASE_PRIVATE_KEY
  );
}

/**
 * Lazily initialise Firebase Admin. Called inside request handlers (never at
 * import time) so builds don't need credentials.
 * Throws if the credentials are missing.
 */
export function getAdminApp(): App {
  const existing = getApps();
  if (existing.length) return existing[0];
  if (!hasAdminCredentials()) {
    throw new Error("Firebase Admin credentials are not configured");
  }
  return initializeApp({
    credential: cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      // The .replace() is crucial for parsing the RSA key from the .env file correctly
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
}

export function getAdminDb(): Firestore {
  return getFirestore(getAdminApp());
}
