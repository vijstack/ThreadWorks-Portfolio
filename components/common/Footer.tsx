"use client";

import React from 'react';
import Link from 'next/link';
import { Shirt, Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-secondary-200 dark:border-secondary-800 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand & Description */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center transition-transform group-hover:scale-105 shadow-md shadow-primary-500/20">
                <Shirt className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-foreground">
                Thread<span className="text-primary-600">Works</span>
              </span>
            </Link>
            <p className="text-secondary-600 dark:text-secondary-400 max-w-sm leading-relaxed text-sm">
              The modern platform for custom apparel printers. Streamline your bulk orders from clubs, companies, and communities with our intuitive dashboard.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-secondary-50 dark:bg-slate-900 border border-secondary-200 dark:border-secondary-800 flex items-center justify-center text-secondary-500 hover:text-primary-600 hover:border-primary-200 dark:hover:border-primary-800 transition-colors">
                <Twitter className="w-4 h-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-secondary-50 dark:bg-slate-900 border border-secondary-200 dark:border-secondary-800 flex items-center justify-center text-secondary-500 hover:text-primary-600 hover:border-primary-200 dark:hover:border-primary-800 transition-colors">
                <Instagram className="w-4 h-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-secondary-50 dark:bg-slate-900 border border-secondary-200 dark:border-secondary-800 flex items-center justify-center text-secondary-500 hover:text-primary-600 hover:border-primary-200 dark:hover:border-primary-800 transition-colors">
                <Linkedin className="w-4 h-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-secondary-50 dark:bg-slate-900 border border-secondary-200 dark:border-secondary-800 flex items-center justify-center text-secondary-500 hover:text-primary-600 hover:border-primary-200 dark:hover:border-primary-800 transition-colors">
                <Facebook className="w-4 h-4" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3 shrink-0">
              <li>
                <Link href="#" className="text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Order Management</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Design Studio</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-2">
                  Integrations 
                  <span className="bg-primary-50 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">New</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Use Cases Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Use Cases</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Corporate Apparel</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Sports Teams</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">University Clubs</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Event Merch</Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact Support</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-200 dark:border-secondary-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-500">
            © {currentYear} ThreadWorks, Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-secondary-500 hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-secondary-500 hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="#" className="text-sm text-secondary-500 hover:text-foreground transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
