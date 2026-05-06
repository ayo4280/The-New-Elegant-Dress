"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % quotes.length);
  }, []);

  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto px-6 text-center z-10 min-h-[500px] md:min-h-[400px] flex flex-col justify-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative Quote Icon */}
      <span 
        className="material-symbols-outlined text-secondary text-5xl md:text-6xl mb-6 md:mb-8 block mx-auto" 
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        format_quote
      </span>
      
      {/* Main Quote Area */}
      <div className="relative h-full flex items-center justify-center">
        {/* Navigation Arrows - Visible on Hover */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-20 p-2 text-white/50 hover:text-secondary transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-0 hidden md:block"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
        </button>

        <div className="w-full relative overflow-hidden px-4 md:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col items-center"
            >
              <blockquote className="font-headline text-2xl md:text-4xl lg:text-5xl italic leading-tight mb-8 md:mb-12 text-white text-balance">
                &quot;{quotes[index].text}&quot;
              </blockquote>
              <motion.cite 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-label tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs font-bold text-secondary-fixed opacity-80"
              >
                {quotes[index].author}
              </motion.cite>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 z-20 p-2 text-white/50 hover:text-secondary transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-[20px] group-hover:translate-x-0 hidden md:block"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mt-12 md:mt-16">
        {quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 transition-all duration-700 rounded-full ${
              i === index ? "w-10 md:w-12 bg-secondary" : "w-2 md:w-3 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      
      {/* Mobile Swipe Indicators (Optional visual cue) */}
      <div className="md:hidden flex justify-between w-full absolute top-1/2 left-0 px-2 pointer-events-none opacity-30">
        <ChevronLeft className="w-6 h-6 text-white" />
        <ChevronRight className="w-6 h-6 text-white" />
      </div>
    </div>
  );
}
