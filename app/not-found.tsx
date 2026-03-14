"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ArrowLeft, LayoutDashboard, Shirt } from "lucide-react";

export default function NotFound() {
  const whatsappNumber = "919695146906";
  const message = "Hello, I saw your portfolio website and I'm interested in building a similar website for my business. Can we discuss it?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply dark:mix-blend-screen">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-secondary-200/50 dark:bg-secondary-800/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-primary-100/30 dark:bg-primary-900/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="w-full max-w-2xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-foreground/5 dark:shadow-none border border-secondary-200/80 dark:border-secondary-800/60 p-8 sm:p-12 relative overflow-hidden"
        >
          {/* Subtle Floating UI Elements inside Card */}
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute top-8 left-8 hidden sm:flex items-center justify-center w-12 h-12 bg-secondary-50 dark:bg-secondary-800/50 rounded-xl border border-secondary-200 dark:border-secondary-700/50 opacity-60"
          >
            <Shirt className="w-5 h-5 text-secondary-500" />
          </motion.div>
          <motion.div
            animate={{ y: [10, -10, 10], rotate: [2, -2, 2] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="absolute bottom-12 right-8 hidden sm:flex items-center justify-center w-14 h-14 bg-secondary-50 dark:bg-secondary-800/50 rounded-xl border border-secondary-200 dark:border-secondary-700/50 opacity-60"
          >
            <LayoutDashboard className="w-6 h-6 text-secondary-500" />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-100/50 dark:bg-secondary-800/30 border border-secondary-200/50 dark:border-secondary-700/50 text-secondary-800 dark:text-secondary-300 font-medium tracking-wide uppercase text-xs mb-8">
              Demo Page
            </div>

            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              This Page Is Part of a <br className="hidden sm:block" />
              Demo Website
            </h1>

            <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-6 max-w-lg mx-auto leading-relaxed">
              You're exploring a portfolio demo created to showcase how custom ordering platforms can work for businesses like yours.
            </p>

            <div className="w-16 h-px bg-secondary-200 dark:bg-secondary-800 mx-auto mb-6"></div>

            <p className="text-sm font-medium text-secondary-800 dark:text-secondary-300 mb-8 max-w-md mx-auto">
              If you'd like a similar website built for your business, I can create a custom solution for you.
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center gap-6 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-2"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2.5 px-8 py-4 bg-foreground dark:bg-white text-background dark:text-foreground rounded-2xl font-semibold transition-all shadow-xl shadow-foreground/10"
                >
                  <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                  Build My Website
                </motion.div>
                <span className="text-xs text-secondary-500 dark:text-secondary-500 group-hover:text-foreground dark:group-hover:text-white transition-colors">
                  Opens WhatsApp
                </span>
              </a>

              <Link
                href="/"
                className="group flex items-center gap-2 text-sm font-medium text-secondary-500 hover:text-foreground dark:hover:text-white transition-colors mt-2"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Return to Homepage
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
