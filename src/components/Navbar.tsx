'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/events', label: 'Events' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-accent navbar-blurred-bottom">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="relative flex items-center h-16">
          {/* Logo - Far Left */}
          <Link href="/" className="flex items-center gap-3 group shrink-0 bg-primary p-2 rounded-full">
            <img src="/bevsoc_brown.png" alt="BevSoc" className="w-10 h-10 object-contain" />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-perandory text-2xl lg:text-4xl xl:text-5xl px-2 lg:px-4 pt-2 transition-all duration-200 rounded-lg
                    ${isActive 
                      ? 'text-primary' 
                      : 'text-white/90 hover:text-white'
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile: Upcoming Events link centered, same font as nav */}
          <Link
            href="/events"
            className={`md:hidden absolute left-1/2 -translate-x-1/2 font-perandory text-4xl sm:text-4xl transition-colors whitespace-nowrap ${
              pathname === '/events' ? 'text-white' : 'text-primary hover:text-white'
            }`}
          >
            EVENTS
          </Link>

          {/* Mobile Menu Button - pushed right on mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden ml-auto p-2 text-primary hover:text-white transition-colors relative z-10"
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
        className={`md:hidden transition-all duration-150 ease-out overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 space-y-1 bg-accent-dark/95">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 font-poppins text-lg sm:text-xl transition-all duration-200 rounded-lg
                  ${isActive 
                    ? 'text-primary font-semibold bg-primary/30' 
                    : 'text-primary hover:text-white hover:bg-accent-light/20'
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
