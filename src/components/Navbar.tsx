"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("Home");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Solutions", href: "#solutions" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="sticky-top bg-white border-b border-slate-100 shadow-sm z-50 py-2.5 relative overflow-hidden">
      {/* Top-Right Blue Diagonal Stripe Accent */}
      <div className="absolute top-0 right-0 w-28 sm:w-40 lg:w-48 h-full pointer-events-none z-0">
        <div className="absolute -top-6 -right-6 w-28 sm:w-40 lg:w-48 h-28 sm:h-40 lg:h-48 bg-[#1E4D8C] transform rotate-45 shadow-lg"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 flex flex-wrap lg:flex-nowrap items-center justify-between gap-3 relative z-10">
        {/* Logo - TS TRICKLE SOLUTIONS */}
        <Link
          className="flex items-center gap-2.5 sm:gap-3 text-decoration-none group shrink-0"
          href="/"
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-blue-600 flex items-center justify-center font-black text-blue-700 text-base sm:text-lg tracking-tighter shadow-sm bg-blue-50/50 group-hover:scale-105 transition-transform">
            TS
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg lg:text-xl font-bold text-[#1E3A8A] tracking-wider uppercase font-sans leading-tight">
              TRICKLE SOLUTIONS
            </span>
          </div>
        </Link>

        {/* Navigation Tabs - Responsive Scroll & Wrap */}
        <nav className="flex items-center gap-3 sm:gap-6 lg:gap-8 overflow-x-auto py-1 max-w-full no-scrollbar">
          {navLinks.map((link) => {
            const isActive = activeNav === link.name;
            return (
              <div key={link.name} className="relative py-1 shrink-0">
                <Link
                  href={link.href}
                  onClick={() => setActiveNav(link.name)}
                  className={`text-decoration-none text-slate-800 hover:text-blue-600 font-medium text-xs sm:text-sm lg:text-base transition-colors ${
                    isActive ? "text-blue-600 font-semibold" : ""
                  }`}
                >
                  {link.name}
                </Link>

                {/* Blue Active Underline Indicator */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#1D70B8] rounded-full"></span>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
