import type { Metadata } from "next";

import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Brenda Mutai | Portfolio",
  description: "Software Engineer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
