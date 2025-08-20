// app/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";  // ✅ Bootstrap CSS
import "./globals.css"; // ✅ Tailwind/Shadcn CSS

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Next.js Dashboard with Bootstrap + Shadcn UI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
