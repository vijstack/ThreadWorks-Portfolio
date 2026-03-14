"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  MessageSquare,
  Shirt,
  Calculator,
  Clock,
} from "lucide-react";

const problems = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Orders Coming from Everywhere",
    description: "Customers send designs, sizes, and quantities through WhatsApp, email, and calls, making orders difficult to track.",
  },
  {
    icon: <Shirt className="w-6 h-6" />,
    title: "Confusion in Size Distribution",
    description: "Managing bulk sizes like S, M, L, XL across hundreds of shirts becomes messy without a structured system.",
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Manual Price Calculation",
    description: "Prices vary based on fabric, GSM, printing type, and quantity, making quotes slow and error-prone.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Design Approval Delays",
    description: "Customers send multiple logo revisions, which slows down production and causes miscommunication.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProblemSection() {
  return (
    <section className="py-24 bg-secondary-50/50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-100/50 dark:bg-secondary-800/30 border border-secondary-200/50 dark:border-secondary-700/50 text-secondary-800 dark:text-secondary-300 font-medium mb-6 tracking-wide uppercase text-xs">
            The Problem
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Problems Custom T-Shirt Printers Face
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400">
            Managing bulk custom apparel orders manually leads to confusion, delays, and lost sales.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 border border-secondary-100/50 dark:border-secondary-700/30 group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary-50 dark:bg-secondary-800 text-foreground dark:text-white flex items-center justify-center mb-6 group-hover:bg-secondary-100 dark:group-hover:bg-secondary-700 transition-colors duration-500">
                {problem.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed text-sm">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
