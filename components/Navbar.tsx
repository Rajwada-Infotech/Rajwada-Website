"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ContactDrawer from "./ContactDrawer";

export default function Navbar() {
  const [contactOpen, setContactOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-500

          ${
            scrolled
              ? "border-b border-white/10 bg-black/20 backdrop-blur-md"
              : "bg-transparent border-transparent"
          }
        `}
      >
        <div className="container-main">
          
          <div
            className="
              h-[92px]
              flex
              items-center
              justify-between
            "
          >
            
            {/* LOGO */}
            <div>
              <h2
                className="
                  serif
                  text-[20px]
                  tracking-[0.12em]
                "
              >
                RAJWADA INFOTECH
              </h2>

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.28em]
                  text-white/45
                  mt-1
                "
              >
                ERP SOLUTIONS
              </p>
            </div>

{/* CENTER NAV */}
<nav
  className="
    hidden
    lg:flex
    items-center
    gap-8
  "
>
  <a
    href="/"
    className="
      text-[12px]
      uppercase
      tracking-[0.24em]
      text-white/45
      transition-all
      duration-300
      hover:text-white
    "
  >
    Home
  </a>

  <a
    href="/about"
    className="
      text-[12px]
      uppercase
      tracking-[0.24em]
      text-white/45
      transition-all
      duration-300
      hover:text-white
    "
  >
    About
  </a>

  <a
    href="/services"
    className="
      text-[12px]
      uppercase
      tracking-[0.24em]
      text-white/45
      transition-all
      duration-300
      hover:text-white
    "
  >
    Services
  </a>



  <a
  href="/blog"
  className="
    text-[12px]
    uppercase
    tracking-[0.24em]
    text-white/45
    transition-all
    duration-300
    hover:text-white
  "
>
  Blog
</a>

<a
    href="/career"
    className="
      text-[12px]
      uppercase
      tracking-[0.24em]
      text-white/45
      transition-all
      duration-300
      hover:text-white
    "
  >
    Career
  </a>
  
</nav>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
              
              {/* Drawer Button */}
              <button
                onClick={() => setOpen(true)}
                className="
                  w-[58px]
                  h-[58px]
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  hover:border-[#c9ba9b]
                  hover:text-[#c9ba9b]
                "
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* DRAWER */}
      <div
        className={`
          fixed
          top-0
          right-0
          h-screen
          w-[340px]
          bg-[#0b0b09]
          border-l
          border-white/10
          z-[100]
          transition-transform
          duration-500
          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        
        {/* Top */}
        <div
          className="
            h-[92px]
            px-8
            border-b
            border-white/10
            flex
            items-center
            justify-between
          "
        >
          <h3
            className="
              serif
              text-[24px]
            "
          >
            Menu
          </h3>

          <button
            onClick={() => setOpen(false)}
            className="
              w-10
              h-10
              border
              border-white/10
              flex
              items-center
              justify-center
              hover:border-[#c9ba9b]
              transition-all
            "
          >
            <X size={18} />
          </button>
        </div>

        {/* Links */}
        <div className="p-8 flex flex-col gap-8">
          
        <a
  href="#footer"
  onClick={() => setOpen(false)}
  className="
    text-[13px]
    uppercase
    tracking-[0.24em]
    text-[#c9ba9b]
    hover:text-[#e5d3b3]
    transition-all
    text-left
  "
>
  Contact Us
</a>

<button
  type="button"
  onClick={(e) => {
    e.preventDefault();
    setOpen(false);

    setTimeout(() => {
      setContactOpen(true);
    }, 200);
  }}
  className="
    text-[13px]
    uppercase
    tracking-[0.24em]
    text-[#c9ba9b]
    hover:text-[#e5d3b3]
    transition-all
    text-left
  "
>
  Chat With Us
</button>
        </div>
      </div>

      <ContactDrawer
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}