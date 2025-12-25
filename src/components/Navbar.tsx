'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/home', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/events', label: 'Events' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-accent navbar-blurred-bottom">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center h-16">
          {/* Logo - Far Left */}
          <Link href="/" className="flex items-center gap-3 group shrink-0 bg-primary p-2 rounded-full">
            <img src="/bevsoclogo_maroon.png" alt="BevSoc" className="w-10 h-10 object-cover" />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-poppins text-2xl px-4 py-2 transition-all duration-200 rounded-lg
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-accent hover:text-accent-dark transition-colors"
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
        <div className="px-4 py-3 space-y-1" style={{ 
          background: 'rgba(94, 38, 48, 0.15)', 
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 font-poppins text-2xl transition-all duration-200 rounded-lg
                  ${isActive 
                    ? 'text-accent font-semibold bg-white bg-opacity-20' 
                    : 'text-accent hover:text-accent-dark hover:bg-white hover:bg-opacity-10'
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
