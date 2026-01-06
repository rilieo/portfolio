import type { Metadata } from "next";
import { Dokdo, Dongle } from "next/font/google";
import "./globals.css";

export const dokdo = Dokdo({
  weight: "400",
  variable: "--font-dokdo",
})

export const dongle = Dongle({
  weight: "400",
  variable: "--font-dongle",
})

export const metadata: Metadata = {
  title: "Riley Dou",
  description: "about me!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dokdo.variable} ${dongle.variable} antialiased`}>
      <body className="bg-pastel-blue">
        {children}
      </body>
    </html>
  );
}
