import type { Metadata } from "next";
import "@css/globals.css";
import { NavbarComponent } from "@components/Navbar";

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
      <body>
        <header>
          <NavbarComponent />
        </header>
        {children}
      </body>
    </html>
  );
}
