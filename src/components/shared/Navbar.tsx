"use client";

import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll(); // check on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 text-[#F5F5F6] font-sans selection:bg-[#CCFF00] selection:text-black transition-all duration-300 ${
        scrolled
          ? "bg-[#003be2]/80 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div
        className={`relative z-50 flex items-center justify-between px-4 py-7 md:px-24 xl:max-w-[1440px] xl:mx-auto transition-all duration-300 ${
          scrolled ? "pt-5 pb-5" : "pt-10 pb-7"
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#CCFF00] text-[#0047FF] font-bold">
            <span className="text-xl">b</span>
          </div>
          <span className="text-xl font-bold tracking-tight">ByteSpace</span>
        </div>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link href="#" className="hover:text-[#CCFF00] transition-colors">
            Home
          </Link>
          <Link href="/courses" className="hover:text-[#CCFF00] transition-colors">
            Courses
          </Link>
          <Link href="#" className="hover:text-[#CCFF00] transition-colors">
            Creators
          </Link>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="#" className="hover:text-[#CCFF00] transition-colors">
            Sign In
          </Link>
          <Link href="#" className="hover:text-[#CCFF00] transition-colors">
            Join Us
          </Link>
          <button className="hover:text-[#CCFF00] transition-colors">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
