import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavBar from "@/components/Navbar"; // or "../components/NavBar"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mehak Bahar - Frontend Developer & Portfolio",
  description: "Portfolio of Mehak Bahar, a frontend developer specializing in React, Next.js, and modern web technologies. Explore projects, skills, and contact information.",
  keywords: "Mehak Bahar, frontend developer, React, Next.js, portfolio, web developer, projects, contact",
  authors: [{ name: "Mehak Bahar", url: "https://www.linkedin.com/in/mehak-bahar/" }],
  openGraph: {
    title: "Mehak Bahar - Frontend Developer",
    description: "Portfolio of Mehak Bahar, a frontend developer specializing in React, Next.js, and modern web technologies.",
    url: "https://your-portfolio-url.com",
    images: [
      {
        url: "https://your-portfolio-url.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mehak Bahar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehak Bahar - Frontend Developer",
    description: "Portfolio of Mehak Bahar, a frontend developer specializing in React, Next.js, and modern web technologies.",
    images: ["https://your-portfolio-url.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only absolute top-2 left-2 bg-accent text-white px-4 py-2 rounded z-50">
          Skip to main content
        </a>
        <NavBar />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
