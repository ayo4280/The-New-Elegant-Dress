"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  {
    text: "True luxury is not just in the fabric, but in the silence of a perfect fit. It is the confidence to walk into any room and feel as though you belong to the earth beneath you.",
    author: "Obi Ndubisi, Master Tailor",
  },
  {
    text: "Real luxury is understanding quality, and having the time to enjoy it.",
    author: "G. Bruce Boyer",
  },
  {
    text: "Elegance is not standing out, but being remembered.",
    author: "Giorgio Armani",
  },
  {
    text: "A man should look as if he had bought his clothes with intelligence, put them on with care, and then forgotten all about them.",
    author: "Hardy Amies",
  },
  {
    text: "Like every good man, I strive for perfection, and, like every ordinary man, I have found that perfection is out of reach – but not the perfect suit.",
    author: "Edward Tivnan",
  },
  {
    text: "Putting on a beautifully designed suit elevates my spirit, extols my sense of self, and helps define me as a man to whom details matter.",
    author: "Gay Talese",
  },
  {
    text: "The only person who acts sensibly is my tailor. He takes my measure anew every time he sees me. Everyone else goes by their old measurements.",
    author: "George Bernard Shaw",
  },
];

export function QuoteCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto px-6 text-center z-10 min-h-[400px] flex flex-col justify-center">
      <span 
        className="material-symbols-outlined text-secondary text-6xl mb-8 block" 
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        format_quote
      </span>
      
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <blockquote className="font-headline text-3xl md:text-5xl italic leading-tight mb-12 text-white">
              &quot;{quotes[index].text}&quot;
            </blockquote>
            <motion.cite 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-label tracking-widest uppercase text-sm font-bold text-secondary-fixed"
            >
              {quotes[index].author}
            </motion.cite>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-3 mt-16">
        {quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              i === index ? "w-8 bg-secondary" : "w-2 bg-white/20"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
