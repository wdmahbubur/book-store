import type { Metadata } from "next";
import "@css/globals.css";

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (process.env.NODE_ENV !== "production") {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

export const metadata: Metadata = {
  title: "Book Store App - Next.js + Tailwind CSS + TypeScript",
  description:
    "This is a book store project where user can sell or rent and buy book",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
