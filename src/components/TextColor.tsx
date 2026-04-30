"use client";

import React from "react";

export function TextColor() {
  return (
    <div className="w-full mb-10 mt-4 md:mt-6">
      <h1 className="tracking-tighter flex select-none flex-col lg:flex-row text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none justify-start items-start gap-2 lg:gap-4 flex-wrap">
        <span
          data-content="Crafted"
          className="before:animate-gradient-background-1 relative before:absolute before:bottom-4 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
        >
          <span className="from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1 bg-gradient-to-r bg-clip-text px-2 text-transparent sm:px-5">
            Crafted
          </span>
        </span>
        <span
          data-content="for the"
          className="relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0 before:text-white/20"
        >
          <span className="px-2 text-white/80 sm:px-5">
            for the
          </span>
        </span>
        <span
          data-content="Modern"
          className="before:animate-gradient-background-2 relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
        >
          <span className="from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2 bg-gradient-to-r bg-clip-text px-2 text-transparent sm:px-5">
            Modern
          </span>
        </span>
        <span
          data-content="Professional."
          className="before:animate-gradient-background-3 relative before:absolute before:bottom-1 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
        >
          <span className="from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3 bg-gradient-to-r bg-clip-text px-2 text-transparent sm:px-5">
            Professional.
          </span>
        </span>
      </h1>
    </div>
  );
}
