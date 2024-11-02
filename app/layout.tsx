import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "timours loungebar",
  description: " timours lounge bar",
  icons: {
    icon: "../public/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta property="og:title" content="Timour's Lounge Bar" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
