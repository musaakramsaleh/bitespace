"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Users } from "lucide-react";
import logo from "@/assets/Vector (4).png";
import cart from "@/assets/Style=Outlined (1).png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/courses", label: "Courses", icon: BookOpen },
    { href: "/creators", label: "Creators", icon: Users },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ================= TOP NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 right-0 z-100 text-[#F5F5F6] font-sans selection:bg-[#CCFF00] selection:text-black transition-all duration-300 ${
          scrolled
            ? "bg-[#003be2]/80 backdrop-blur-md shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div
          className={`relative z-50 flex items-center justify-between px-4 py-7 md:px-5 xl:px-0 xl:max-w-[1200px] xl:mx-auto transition-all duration-300 ${
            scrolled ? "pt-5 pb-5" : "pt-10 pb-7"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="main logo" />
            <span className="text-2xl font-bold tracking-tight">ByteSpace</span>
          </Link>

          {/* Middle nav links — desktop only */}
          <div className="hidden items-center gap-8 text-base md:flex">
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
                  {active && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-[#D4FB20]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3 text-base sm:gap-6">
            {/* Sign In / Join Us — desktop only */}
            <Link
              href="/login"
              className="hidden transition-colors hover:text-[#CCFF00] md:block"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="hidden transition-colors hover:text-[#CCFF00] md:block"
            >
              Join Us
            </Link>

            {/* Cart icon — ALWAYS visible (mobile + desktop) */}
            <button className="transition-colors hover:text-[#CCFF00]">
              <Image src={cart} alt="shopping cart" />
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE BOTTOM STACK ================= */}
      <div className="fixed bottom-0 left-0 right-0 z-100 md:hidden">
        {/* ---- Sign In / Join Us row ---- */}
        <div className="flex items-center justify-center gap-3 border-t border-gray-200 bg-white px-4 py-3">
          <Link
            href="/login"
            className="flex-1 rounded-full border border-[#003BE2] py-2 text-center text-sm font-semibold text-[#003BE2] transition-colors active:bg-[#003BE2]/5"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="flex-1 rounded-full bg-[#003BE2] py-2 text-center text-sm font-semibold text-white transition-colors active:bg-[#003BE2]/90"
          >
            Join Us
          </Link>
        </div>

        {/* ---- Bottom nav bar ---- */}
        <nav className="border-t border-gray-200 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
          <div className="flex items-center justify-around px-2 py-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex flex-1 flex-col items-center justify-center gap-1 rounded-lg py-2 transition-colors ${
                    active
                      ? "text-[#003BE2]"
                      : "text-gray-500 hover:text-[#003BE2]"
                  }`}
                >
                  <Icon
                    size={22}
                    className={active ? "stroke-[2.5]" : "stroke-[2]"}
                  />
                  <span
                    className={`text-[11px] ${
                      active ? "font-semibold" : "font-medium"
                    }`}
                  >
                    {link.label}
                  </span>
                  {active && (
                    <span className="absolute -top-px left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-[#003BE2]" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
