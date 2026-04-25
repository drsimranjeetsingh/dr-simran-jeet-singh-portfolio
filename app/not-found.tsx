"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white pt-24 pb-12">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8 relative"
          >
            {/* Background blur effect */}
            <div className="absolute inset-0 bg-blue-400 blur-3xl opacity-20 rounded-full"></div>
            {/* Icon */}
            <div className="relative bg-white w-24 h-24 flex items-center justify-center rounded-full shadow-xl border border-blue-100">
               <span className="text-5xl" role="img" aria-label="Tooth">🦷</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-4"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold text-neutral-800 mb-6"
          >
            Oops! This page was extracted.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-neutral-600 mb-10 leading-relaxed"
          >
            We can't seem to find the page you're looking for. It might have been moved, or perhaps it's just a little cavity in our system. Don't worry, your smile is safe with us!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4"
          >
            <Button href="/" className="px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
              Return to Clinic
            </Button>
          </motion.div>
        </div>
      </Container>
    </main>
  );
}
