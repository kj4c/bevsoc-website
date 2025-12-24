'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/events', label: 'Events' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-accent border-b-4 border-accent-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-2" style={{ boxShadow: 'none' }}>
              <span className="font-bubbly-title text-primary text-sm">BevSoc</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-pixel text-xl px-4 py-2 transition-all duration-200
                    ${isActive 
                      ? 'text-primary' 
                      : 'text-pink-light hover:text-white'
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/events"
              className="pixel-btn text-sm"
            >
              ✨ Join Us ✨
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[var(--primary)] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 space-y-1 bg-[var(--accent)] border-t-4 border-[var(--accent-dark)]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 font-pixel text-xl transition-all duration-200
                  ${isActive 
                    ? 'text-[var(--primary)] bg-[var(--accent-dark)]' 
                    : 'text-[var(--pink-light)] hover:text-white hover:bg-[var(--accent-light)]'
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/events"
            onClick={() => setIsMenuOpen(false)}
            className="block mt-2 pixel-btn text-center"
          >
            ✨ Join Us ✨
          </Link>
        </div>
      </div>
    </nav>
  );
}
