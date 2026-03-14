"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  ListChecks,
  Image as ImageIcon,
  Calculator,
  Shirt,
  Layers,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: <ListChecks className="w-5 h-5" />,
    title: "Structured Bulk Orders",
    description:
      "Customers submit complete orders with sizes, quantities, colors, and fabric selections in one organized form.",
  },
  {
    icon: <ImageIcon className="w-5 h-5" />,
    title: "Easy Logo & Artwork Upload",
    description:
      "Clients upload logos or graphics directly into the system, eliminating confusion from scattered messages.",
  },
  {
    icon: <Calculator className="w-5 h-5" />,
    title: "Automatic Quote Generation",
    description:
      "Pricing is calculated automatically based on fabric type, GSM, printing style, and quantity.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function SolutionSection() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-100/50 dark:bg-secondary-800/30 border border-secondary-200/50 dark:border-secondary-700/50 text-secondary-800 dark:text-secondary-300 font-medium mb-6 tracking-wide uppercase text-xs">
            Our Solution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
            A Smarter Way to Manage <br className="hidden sm:block" />
            Bulk T-Shirt Orders
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed max-w-2xl mx-auto">
            Our platform helps printing businesses accept bulk custom orders,
            manage designs, and generate accurate quotes — all in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left Side: Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-8 lg:pr-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex gap-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary-50 dark:bg-secondary-800/50 border border-secondary-200/50 dark:border-secondary-700/30 text-foreground dark:text-white flex items-center justify-center shrink-0 group-hover:bg-foreground group-hover:text-background dark:group-hover:bg-white dark:group-hover:text-foreground transition-all duration-500 shadow-sm">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-secondary-600 dark:group-hover:text-secondary-300 transition-colors duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side: Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-linear-to-tr from-secondary-200/30 to-background dark:from-secondary-800/20 dark:to-background rounded-full blur-3xl -z-10"></div>

            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-secondary-200/60 dark:border-secondary-800/60 overflow-hidden relative"
            >
              {/* Mockup Header */}
              <div className="bg-secondary-50 dark:bg-slate-800/50 border-b border-secondary-100 dark:border-secondary-800 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500/80"></div>
                  </div>
                  <span className="text-sm font-medium text-secondary-500 ml-2">
                    New Bulk Order
                  </span>
                </div>
                <button className="text-xs bg-foreground text-background dark:bg-white dark:text-foreground px-4 py-1.5 rounded-lg font-medium shadow-sm">
                  Save Draft
                </button>
              </div>

              {/* Mockup Body */}
              <div className="p-6 md:p-8 space-y-6">
                {/* Product & Base Config */}
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* T-Shirt Preview */}
                  <div className="w-full sm:w-1/3 bg-secondary-50 dark:bg-slate-800/50 rounded-xl p-4 flex flex-col items-center justify-center border border-secondary-200/50 dark:border-secondary-700/50 h-40">
                    <Shirt className="w-16 h-16 text-foreground/20 dark:text-white/20 mb-3" />
                    <span className="text-xs font-semibold text-secondary-600 w-full text-center bg-white dark:bg-slate-900 py-1.5 rounded-md border border-secondary-200 dark:border-secondary-700 shadow-sm">
                      Navy Blue
                    </span>
                  </div>

                  {/* Config Options */}
                  <div className="w-full sm:w-2/3 space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-secondary-500 mb-1.5 block">
                        Fabric Selection
                      </label>
                      <div className="flex items-center justify-between bg-white dark:bg-slate-900 border border-secondary-200 dark:border-secondary-700 rounded-xl px-4 py-2.5 shadow-sm ring-1 ring-black/5 dark:ring-white/5">
                        <span className="text-sm font-medium text-foreground">
                          100% Combed Cotton
                        </span>
                        <CheckCircle className="w-4 h-4 text-foreground dark:text-white" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-secondary-500 mb-1.5 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" /> GSM Weight
                      </label>
                      <div className="flex gap-2">
                        <div className="flex-1 bg-secondary-50 dark:bg-slate-800 border border-secondary-200 dark:border-secondary-700 rounded-lg py-2 text-center text-sm text-secondary-500 cursor-not-allowed opacity-70">
                          180
                        </div>
                        <div className="flex-1 bg-secondary-100 dark:bg-secondary-700 border-2 border-foreground dark:border-white rounded-lg py-2 text-center text-sm font-bold text-foreground dark:text-white">
                          220
                        </div>
                        <div className="flex-1 bg-secondary-50 dark:bg-slate-800 border border-secondary-200 dark:border-secondary-700 rounded-lg py-2 text-center text-sm text-secondary-500 cursor-not-allowed opacity-70">
                          260
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* File Upload Area */}
                <div>
                  <label className="text-xs font-semibold text-secondary-500 mb-1.5 block">
                    Artwork
                  </label>
                  <div className="border-2 border-dashed border-secondary-200 dark:border-secondary-700 rounded-xl p-4 flex items-center gap-4 bg-secondary-50/50 dark:bg-slate-800/30">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                      <ImageIcon className="text-blue-600 dark:text-blue-400 w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">
                        front_logo_final.pdf
                      </p>
                      <div className="w-full bg-secondary-200 dark:bg-secondary-700 h-1.5 rounded-full mt-2">
                        <div className="bg-green-500 h-1.5 rounded-full w-full"></div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">
                      Uploaded
                    </span>
                  </div>
                </div>

                {/* Size Distribution */}
                <div>
                  <label className="text-xs font-semibold text-secondary-500 mb-1.5 flex justify-between items-center">
                    <span>Size Distribution</span>
                    <span className="text-primary-600 dark:text-primary-400 font-bold">Total: 150</span>
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="border border-secondary-200 dark:border-secondary-700 rounded-lg p-2 text-center bg-white dark:bg-slate-900">
                      <div className="text-xs text-secondary-500 mb-1">S</div>
                      <div className="font-semibold text-sm text-foreground">25</div>
                    </div>
                    <div className="border-2 border-foreground dark:border-white rounded-lg p-2 text-center bg-white dark:bg-slate-900 shadow-sm">
                      <div className="text-xs font-bold text-foreground dark:text-white mb-1">M</div>
                      <div className="font-semibold text-sm text-foreground">50</div>
                    </div>
                    <div className="border border-secondary-200 dark:border-secondary-700 rounded-lg p-2 text-center bg-white dark:bg-slate-900">
                      <div className="text-xs text-secondary-500 mb-1">L</div>
                      <div className="font-semibold text-sm text-foreground">50</div>
                    </div>
                    <div className="border border-secondary-200 dark:border-secondary-700 rounded-lg p-2 text-center bg-white dark:bg-slate-900">
                      <div className="text-xs text-secondary-500 mb-1">XL</div>
                      <div className="font-semibold text-sm text-foreground">25</div>
                    </div>
                  </div>
                </div>

                {/* Quote Summary CTA */}
                <div className="pt-4 mt-2 border-t border-secondary-100 dark:border-secondary-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-secondary-500">Estimated Price</p>
                    <p className="text-xl font-bold font-heading text-foreground">
                      $1,425.00
                    </p>
                  </div>
                  <button className="bg-foreground hover:bg-secondary-800 dark:bg-white dark:hover:bg-secondary-200 dark:text-background text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-foreground/10 transition-all">
                    Confirm Order
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
