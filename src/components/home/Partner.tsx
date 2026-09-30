import React from "react";
import Image from "next/image";

import logo2 from "@/assets/logo-1.png";
import logo3 from "@/assets/logo-2.png";
import logo4 from "@/assets/logo-3.png";
import logo1 from "@/assets/logo-4.png";

const Partner = () => {
  const logos = [
    { src: logo1, alt: "Logoipsum" },
    { src: logo1, alt: "Logoipsum" },
    { src: logo2, alt: "Logoipsum" },
    { src: logo3, alt: "Logoipsum" },
    { src: logo4, alt: "Logoipsum" },
  ];

  return (
    <section className="w-full bg-[#f5f5f6] py-10 sm:py-12 md:py-16">
      <div className="mx-auto flex max-w-[1132px] flex-wrap items-center justify-center gap-x-10 gap-y-8 px-6 sm:gap-x-14 md:flex-nowrap md:justify-between md:gap-x-6 md:px-10 lg:px-16">
        {logos.map((logo, i) => (
          <div key={i} className="flex shrink-0 items-center gap-2">
            <Image
              src={logo.src}
              alt=""
              className="h-7 w-7 object-contain opacity-50 sm:h-8 sm:w-8"
            />
            <span className="text-lg font-bold tracking-tight text-gray-500 sm:text-xl md:text-[22px]">
              Logoipsum
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partner;
