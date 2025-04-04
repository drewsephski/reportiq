import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import ClientHydrationFix from "./components/ClientHydrationFix";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  fallback: ['system-ui', 'Arial', 'sans-serif'], // Add fallback fonts
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  fallback: ['Menlo', 'Monaco', 'Courier New', 'monospace'], // Add fallback fonts
});

export const metadata: Metadata = {
  title: "Draycast | Supercharge your productivity",
  description: "Draycast lets you control your tools with a few keystrokes. A blazingly fast, fully extensible launcher. It's time to replace Spotlight.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This is a workaround for a hydration issue with Next.js and Tailwind CSS.
  // Don't access document directly in server components
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`} suppressHydrationWarning>
        <ClientHydrationFix />
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
