"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500
        border-b
        
        ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-white/10 py-4"
            : "bg-transparent border-transparent py-6"
        }
      `}
    >
      <div className="container-main flex items-center justify-between">
        
        {/* Logo */}
        <div>
          <h2 className="serif text-[18px] tracking-[0.15em] uppercase">
            Rajwada Infotech
          </h2>

          <p className="text-[9px] uppercase tracking-[0.3em] text-white/50 mt-1">
            ERP Solutions
          </p>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] text-white/50">
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Platform</a>
          </li>

          <li>
            <a href="#">Strategy</a>
          </li>

          <li>
            <a href="#">Insights</a>
          </li>
        </ul>

        {/* Button */}
        <button
          className="
            border
            border-[#c9ba9b55]
            px-6
            py-3
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-[#c9ba9b]
            transition-all
            duration-300
            hover:border-[#c9ba9b]
            hover:text-white
          "
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}