"use client";

import React from "react";
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
            {/* Main Mockup Card */}
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-secondary-200/60 dark:border-secondary-800/60 p-6 md:p-8 backdrop-blur-sm z-10">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Order Configuration
                  </h3>
                  <p className="text-xs text-secondary-500 mt-0.5">
                    Order #ORD-8439
                  </p>
                </div>
                <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs px-2.5 py-1 rounded-full font-semibold">
                  In Progress
                </span>
              </div>

              <div className="space-y-4">
                {/* Upload Section */}
                <motion.div
                  className="flex gap-4 items-center bg-secondary-50/50 dark:bg-secondary-800/20 p-4 rounded-xl border border-secondary-200/50 dark:border-secondary-700/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary-200/50 dark:bg-secondary-800/80 flex items-center justify-center shrink-0">
                    <UploadCloud className="text-secondary-600 dark:text-secondary-400 w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      company_logo_final.ai
                    </p>
                    <p className="text-xs text-secondary-500">
                      Vector Graphic · 2.4 MB
                    </p>
                  </div>
                  <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />
                </motion.div>

                {/* Specs Layer */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="bg-secondary-50/50 dark:bg-secondary-800/20 p-4 rounded-xl border border-secondary-200/50 dark:border-secondary-700/50 transition-colors"
                  >
                    <p className="text-xs text-secondary-500 font-medium mb-1.5 flex items-center gap-1.5">
                      <Shirt className="w-3.5 h-3.5" /> Fabric Type
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      100% Premium Cotton
                    </p>
                  </motion.div>
                  <motion.div
                    className="bg-secondary-50/50 dark:bg-secondary-800/20 p-4 rounded-xl border border-secondary-200/50 dark:border-secondary-700/50 transition-colors"
                  >
                    <p className="text-xs text-secondary-500 font-medium mb-1.5 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" /> Weight (GSM)
                    </p>
                    <p className="text-sm font-semibold text-foreground flex justify-between items-center">
                      220 GSM Thick
                      <Settings className="w-4 h-4 text-secondary-400" />
                    </p>
                  </motion.div>
                </div>

                {/* Quantity & Summary */}
                <div className="flex items-center justify-between border-t border-secondary-100 dark:border-secondary-800 pt-5 mt-2">
                  <div>
                    <p className="text-xs text-secondary-500 font-medium mb-1">
                      Total Quantity
                    </p>
                    <p className="text-2xl font-bold font-heading text-foreground">
                      250 <span className="text-sm font-normal text-secondary-500">pcs</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-secondary-500 font-medium mb-1">
                      Est. Fulfillment
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      12 - 14 Days
                    </p>
                  </div>
                </div>
              </div>
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
                <p className="text-sm font-bold text-foreground">Quote Approved!</p>
                <p className="text-xs text-secondary-500">Ready for production</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
