import React from "react";
import Link from "next/link";
import logo from "@/assets/Vector (4).png";
import Image from "next/image";
const Footer = () => {
  const columns = [
    {
      links: [
        "Featured Courses",
        "Featured Categories",
        "Business",
        "IT",
        "Design",
      ],
    },
    {
      links: ["Development", "Marketing", "Photography", "Finance", "Sport"],
    },
    {
      links: [
        "Become a Creator",
        "Affiliate Program",
        "Contact",
        "Help",
        "About",
      ],
    },
  ];

  return (
    <footer className="w-full  border-t bg-white pt-20 pb-14">
      <div className="mx-auto max-w-[1200px] px-4 lg:px-4 xl:px-0">
        {/* --- Top: Brand + Links --- */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_2fr] lg:gap-16">
          {/* Left — Brand + Newsletter */}
          <div>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src={logo} alt="main logo" />
              <span className="text-2xl font-bold tracking-tight text-[#040819]">
                ByteSpace
              </span>
            </Link>

            <p className="mt-5 max-w-[420px] text-sm leading-relaxed text-[#242528]">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter form */}
            <form className="mt-6 flex max-w-[420px] flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full border border-gray-300 bg-white px-5 py-3 text-sm text-gray-800 outline-none transition-colors placeholder:text-gray-400 focus:border-[#003be2]"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-[#D4FB20] px-7 py-3 text-sm font-semibold text-[#040819] transition-transform hover:scale-105 active:scale-95"
              >
                Search
              </button>
            </form>

            {/* Disclaimer */}
            <p className="mt-5 max-w-[420px] text-xs leading-relaxed text-[#242528]">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Right — Link Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col, i) => (
              <ul key={i} className="space-y-4">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href="#"
                      className="text-sm text-[#242528] transition-colors hover:text-[#003be2]"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* --- Divider --- */}
        <div className="mt-16 border-t border-gray-200" />

        {/* --- Bottom Bar --- */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-[#242528]">
            © 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link
              href="#"
              className="text-xs text-[#242528] transition-colors hover:text-[#003be2]"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-[#242528] transition-colors hover:text-[#003be2]"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-xs text-[#242528] transition-colors hover:text-[#003be2]"
            >
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
