'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Shield, PhoneCall } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/learn', label: 'Learn' },
    { href: '/quiz', label: 'Cyber Quiz' },
    { href: '/safety', label: 'Safety Center' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-xs print:hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <Link 
              href="/" 
              className="flex items-center gap-2.5 rounded-lg py-1 px-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
              aria-label="CyberSafe Home"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600 text-white shadow-xs">
                <Shield className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none tracking-tight text-slate-900">
                  Cyber<span className="text-teal-600">Safe</span>
                </span>
                <span className="text-[10px] font-medium tracking-wide uppercase text-slate-500">
                  CEP Safety Initiative
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <div className="flex items-center space-x-1">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 ${
                      isActive
                        ? 'bg-teal-50 text-teal-800 font-semibold ring-1 ring-teal-200/70 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Quick 1930 Emergency Badge */}
            <div className="pl-2 border-l border-slate-200">
              <a
                href="tel:1930"
                className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 ring-1 ring-rose-200/80 hover:bg-rose-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                title="Dial 1930 for Cyber Crime Reporting"
              >
                <PhoneCall className="h-3 w-3 text-rose-600" aria-hidden="true" />
                <span>Helpline: 1930</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:1930"
              className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-700 ring-1 ring-rose-200"
            >
              <PhoneCall className="h-3 w-3" />
              <span>1930</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open navigation menu</span>
              {isOpen ? (
                <X className="block h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="block h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 shadow-md" id="mobile-menu">
          <div className="space-y-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-teal-50 text-teal-800 font-semibold'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
