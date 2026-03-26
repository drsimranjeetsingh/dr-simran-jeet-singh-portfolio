"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const PremiumNoise = () => (
  <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03]">
    <svg
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  </div>
);

export default function PremiumComingSoon() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentAdvise, setCurrentAdvise] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const dentalAdvises = [
    "Floss daily to keep your smile bright and healthy.",
    "A beautiful smile starts with routine dental care.",
    "Remember to change your toothbrush every 3 months.",
    "Hydration is key for a healthy mouth. Drink plenty of water.",
    "Gentle circular brushing is more effective than brushing hard."
  ];

  useEffect(() => {
    let timer: any;
    const fullText = dentalAdvises[currentAdvise];

    if (isTyping) {
      let charIndex = 0;
      setDisplayedText("");
      timer = setInterval(() => {
        setDisplayedText(fullText.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex >= fullText.length) {
          clearInterval(timer);
          setIsTyping(false);
        }
      }, 50); // fast typing speed
    } else {
      timer = setTimeout(() => {
        setIsTyping(true);
        setCurrentAdvise((prev) => (prev + 1) % dentalAdvises.length);
      }, 3000); // Read time before typing next text
    }

    return () => {
      clearInterval(timer);
      clearTimeout(timer);
    };
  }, [currentAdvise, isTyping]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Text animation variables
  const title = "Elevating Aesthetics.";
  const subtitle = "Refining Smiles.";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#FAFAF8] flex items-center justify-center p-6 sm:p-12 selection:bg-amber-100 selection:text-amber-900">
      <PremiumNoise />

      {/* Dynamic Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: (mousePosition.x - (typeof window !== "undefined" ? window.innerWidth : 1000) / 2) * -0.05,
            y: (mousePosition.y - (typeof window !== "undefined" ? window.innerHeight : 800) / 2) * -0.05,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[70%] rounded-full blur-[120px] bg-gradient-to-br from-rose-100/40 to-transparent mix-blend-multiply"
        />
        <motion.div
          animate={{
            x: (mousePosition.x - (typeof window !== "undefined" ? window.innerWidth : 1000) / 2) * 0.05,
            y: (mousePosition.y - (typeof window !== "undefined" ? window.innerHeight : 800) / 2) * 0.05,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute bottom-[-10%] right-[-20%] w-[70%] h-[60%] rounded-full blur-[150px] bg-gradient-to-tl from-amber-100/50 to-transparent mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">

        {/* Monogram inside a rotating text ring */}
        <div className="relative flex items-center justify-center mb-16">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[140px] h-[140px] opacity-40"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full text-neutral-800">
              <path
                id="textPath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                fill="none"
              />
              <text fontSize="8.5" letterSpacing="2.5" className="uppercase font-medium">
                <textPath href="#textPath" startOffset="0%">
                  • Aesthetic Dentistry • Dr SJS
                </textPath>
              </text>
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-50 to-rose-50 border border-amber-200/50 flex items-center justify-center shadow-[0_8px_32px_-8px_rgba(251,191,36,0.2)] backdrop-blur-md"
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-8 h-8 drop-shadow-sm" 
              fill="url(#toothGradient)" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="toothGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#b45309" />    {/* amber-700 */}
                  <stop offset="50%" stopColor="#d97706" />   {/* amber-600 */}
                  <stop offset="100%" stopColor="#78350f" />  {/* amber-900 */}
                </linearGradient>
              </defs>
              <path d="M7 3C4.5 3 3 5 3 7.5C3 10 4 12 5 14L6 20C6.3 21.5 7.5 22 8 22C8.8 22 9.5 21.2 10 20L11 16C11.3 15 12.7 15 13 16L14 20C14.5 21.2 15.2 22 16 22C16.5 22 17.7 21.5 18 20L19 14C20 12 21 10 21 7.5C21 5 19.5 3 17 3C15 3 13.5 4 12 5C10.5 4 9 3 7 3Z" />
            </svg>
          </motion.div>
        </div>

        {/* Name Plate */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-8">
            <div className="h-[1px] w-6 sm:w-8 bg-amber-200" />
            <h2 className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.4em] text-neutral-500 font-medium whitespace-nowrap">
              Dr. Simran Jeet Singh
            </h2>
            <div className="h-[1px] w-6 sm:w-8 bg-amber-200" />
          </div>
        </motion.div>

        {/* Animated Staggered Title */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-10"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans tracking-tight text-neutral-900 leading-[1.1] mb-2 overflow-hidden flex justify-center flex-wrap">
            {title.split("").map((char, index) => (
              <motion.span
                key={`title-${index}`}
                variants={letterVariants}
                className={char === " " ? "w-3 sm:w-4" : "inline-block"}
              >
                {char}
              </motion.span>
            ))}
          </h1>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif italic text-amber-700/80 leading-[1.1] overflow-hidden flex justify-center flex-wrap">
            {subtitle.split("").map((char, index) => (
              <motion.span
                key={`sub-${index}`}
                variants={letterVariants}
                className={char === " " ? "w-3 sm:w-4" : "inline-block"}
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Reveal Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
          className="h-[1px] w-24 bg-gradient-to-r from-transparent via-amber-300 to-transparent mb-10 origin-center"
        />

        {/* Elegant Description & Rotating Advise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center max-w-lg mx-auto mb-10"
        >
          <p className="text-[13px] sm:text-sm text-neutral-400 font-light text-center mb-4 uppercase tracking-widest">
            Curating an exquisite digital experience
          </p>
          <div className="h-20 w-full relative flex items-center justify-center px-4">
            <p className="text-lg sm:text-xl font-serif italic text-amber-700/90 leading-snug text-center max-w-sm">
              "{displayedText}
              <span className="inline-block w-[2px] h-[1.1em] ml-0.5 bg-amber-700/60 animate-pulse align-middle" />"
            </p>
          </div>
        </motion.div>

        {/* Interactions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-8 text-[11px] sm:text-xs text-neutral-400 uppercase tracking-[0.2em]"
        >
          <a
            href="mailto:sjsingh201@gmail.com"
            className="group relative overflow-hidden pb-2 hover:text-amber-800 transition-colors duration-500"
          >
            <span className="relative z-10">Get in touch</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-amber-800/30 transform origin-right scale-x-0 transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
          </a>

          <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-amber-200/50" />

          <a
            href="https://www.instagram.com/dr.sj_singh?igsh=cmE0NWw5cDRzOXhq"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden pb-2 hover:text-amber-800 transition-colors duration-500"
          >
            <span className="relative z-10">Follow the Journey</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-amber-800/30 transform origin-right scale-x-0 transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
          </a>
        </motion.div>

      </div>
    </main>
  );
}