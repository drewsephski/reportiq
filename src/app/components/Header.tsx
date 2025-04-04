"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container flex items-center justify-between h-[var(--header-height)]">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-bold text-xl">Draycast</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm text-muted hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#extensions" className="text-sm text-muted hover:text-foreground transition-colors">
              Extensions
            </Link>
            <Link href="#pricing" className="text-sm text-muted hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="#blog" className="text-sm text-muted hover:text-foreground transition-colors">
              Blog
            </Link>
          </nav>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Link href="#download" className="btn btn-primary">
            Download
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${isMenuOpen ? "hidden" : "block"}`}
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${isMenuOpen ? "block" : "hidden"}`}
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-[var(--header-height)] left-0 right-0 bg-background border-b border-border ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="container py-6 flex flex-col gap-4">
          <Link
            href="#features"
            className="text-sm text-muted hover:text-foreground transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#extensions"
            className="text-sm text-muted hover:text-foreground transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Extensions
          </Link>
          <Link
            href="#pricing"
            className="text-sm text-muted hover:text-foreground transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="#blog"
            className="text-sm text-muted hover:text-foreground transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="#download"
            className="btn btn-primary w-full mt-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Download
          </Link>
        </nav>
      </div>
    </header>
  );
} 
