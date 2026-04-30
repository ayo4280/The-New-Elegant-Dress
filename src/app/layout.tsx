import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSerif = Noto_Serif({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"], variable: "--font-noto-serif" });

export const metadata: Metadata = {
  title: "Elegant Dress - Bespoke Tailoring",
  description: "Crafted for the Modern Professional. Luxury tailoring inspired by nature, delivered to your door.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import CelestialMatrixShader from "@/components/CelestialMatrixShader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSerif.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="text-on-surface font-body leading-relaxed min-h-[100dvh] flex flex-col">
        <Header />
        <main className="pt-20 flex-1">
          {children}
        </main>
        <Footer />
        <Chatbot />
        <CelestialMatrixShader />
      </body>
    </html>
  );
}
