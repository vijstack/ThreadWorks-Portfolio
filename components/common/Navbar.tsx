"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shirt } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // Set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '#' },
    { name: 'Design Studio', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Bulk Orders', href: '#' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-secondary-200 dark:border-secondary-800 shadow-sm'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center transition-transform group-hover:scale-105 shadow-md shadow-primary-500/20">
              <Shirt className="w-4 h-4 text-white" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-foreground">
              Thread<span className="text-primary-600">Works</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Core Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-secondary-600 dark:text-secondary-400 hover:text-foreground transition-colors px-2"
            >
              Sign In
            </Link>
            <Link
              href="/started"
              className="text-sm font-medium px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all shadow-md shadow-primary-500/20 hover:shadow-primary-500/30 active:scale-[0.98]"
            >
              Start Order
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-2 text-secondary-600 dark:text-secondary-400 hover:text-foreground transition-colors outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white dark:bg-slate-950 border-b border-secondary-200 dark:border-secondary-800 shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-3 text-base font-medium text-secondary-800 dark:text-secondary-200 rounded-lg hover:bg-secondary-50 dark:hover:bg-slate-900/50 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              
              <div className="pt-4 border-t border-secondary-100 dark:border-secondary-800 flex flex-col gap-3 px-3">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-2.5 text-center text-sm font-medium text-foreground bg-secondary-50 dark:bg-slate-900 hover:bg-secondary-100 dark:hover:bg-slate-800 rounded-lg transition-colors border border-secondary-200 dark:border-secondary-800"
                >
                  Sign In
                </Link>
                <Link
                  href="/started"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-2.5 text-center text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow-sm transition-colors"
                >
                  Start Group Order
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
