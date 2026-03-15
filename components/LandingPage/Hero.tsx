"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle,
  UploadCloud,
  Shirt,
  Layers,
  Settings,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background gradients for a subtle, modern aesthetic */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply dark:mix-blend-screen">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-secondary-200/50 dark:bg-secondary-800/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary-100/30 dark:bg-primary-900/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-100/50 dark:bg-secondary-800/30 border border-secondary-200/50 dark:border-secondary-700/50 text-secondary-800 dark:text-secondary-300 text-sm font-medium mb-6 tracking-wide uppercase text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
              Bulk Apparel Production
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight tracking-tight text-foreground mb-6">
              Streamline Bulk <br className="hidden sm:block" />
              <span className="text-secondary-500 dark:text-secondary-400 font-light italic">
                Custom T-Shirt Orders
              </span>
            </h1>

            <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-8 max-w-xl leading-relaxed">
              Accept bulk orders from clubs, companies, and communities with logo
              uploads, fabric and GSM selection, and automated order management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
              <button className="flex items-center justify-center gap-2 px-8 py-3.5 bg-foreground hover:bg-primary-800 dark:bg-white dark:hover:bg-secondary-200 dark:text-background text-white rounded-xl font-medium transition-all shadow-xl shadow-foreground/10 active:scale-[0.98]">
                View Demo
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white dark:bg-slate-900 border border-secondary-200 dark:border-secondary-800 hover:bg-secondary-50 dark:hover:bg-slate-800 text-foreground rounded-xl font-medium transition-all shadow-sm active:scale-[0.98]">
                Book a Call
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-3 gap-x-6 text-sm text-secondary-600 dark:text-secondary-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-foreground/50 shrink-0" />
                Built for Custom Apparel Printers
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-foreground/50 shrink-0" />
                Bulk Order Ready
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-foreground/50 shrink-0" />
                Fabric & GSM Configuration
              </div>
            </div>
          </motion.div>

          {/* Right Side: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative w-full max-w-lg mx-auto lg:mr-0 lg:ml-auto"
          >
            {/* Main Image Card */}
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-secondary-200/60 dark:border-secondary-800/60 overflow-hidden aspect-4/5 sm:aspect-square md:aspect-4/5 lg:aspect-square xl:aspect-4/5">
              <Image
                src="/images/hero-tshirt.png"
                alt="Premium Custom T-Shirt with printed Logo"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 md:-left-12 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-secondary-200 dark:border-secondary-700 p-4 z-20 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-secondary-200/80 dark:bg-secondary-700/80 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-foreground dark:text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Premium Quality</p>
                <p className="text-xs text-secondary-500">Perfect print every time</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
