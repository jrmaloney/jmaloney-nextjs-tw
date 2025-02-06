import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John R. Maloney",
  description: "A personal website for John R. Maloney",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="bg-[#e8e6da]  flex flex-col min-h-screen">
          <Navbar />
          <div className="container mx-auto px-4 flex-grow bg-[#e8e6da]">
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
