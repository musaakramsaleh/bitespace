"use client";

import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/assets/Vector (4).png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll(); // check on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/creators", label: "Creators" },
  ];

  // Active check — exact match for "/", prefix match for others
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 text-[#F5F5F6] font-sans selection:bg-[#CCFF00] selection:text-black transition-all duration-300 ${
        scrolled
          ? "bg-[#003be2]/80 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div
        className={`relative z-50 flex items-center justify-between px-4 py-7 md:px-0 xl:max-w-[1200px] xl:mx-auto transition-all duration-300 ${
          scrolled ? "pt-5 pb-5" : "pt-10 pb-7"
        }`}
      >
        <div className="flex items-center gap-2">
          <Image src={logo} alt="main logo" />
          <span className="text-2xl font-bold tracking-tight">ByteSpace</span>
        </div>

        {/* Middle nav links */}
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-colors ${
                  active
                    ? "text-[#D4FB20]"
                    : "text-[#F5F5F6] hover:text-[#CCFF00]"
                }`}
              >
                {link.label}

                {/* Active underline */}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-[#D4FB20]" />
                )}
              </Link>
            );
          })}
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
