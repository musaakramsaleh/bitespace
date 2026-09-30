import React from "react";
import Image from "next/image";
import bg from "@/assets/CTA_Frame.png";

const Potential = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* --- Background Image --- */}
      <Image
        src={bg}
        alt=""
        priority
        fill
        className="pointer-events-none absolute inset-0 -z-10 object-cover"
      />

      {/* --- Content --- */}
      <div className="mx-auto flex max-w-[1200px] flex-col items-center px-4 py-16 text-center sm:py-24 md:py-20">
        <h2 className="max-w-[700px] text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-[44px]">
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-6 max-w-[980px] text-[18px] leading-relaxed text-[#F5F5F6]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <button className="mt-10 rounded-full bg-[#D4FB20] px-7 py-3 text-sm font-medium text-[#242528] transition-transform hover:scale-105 active:scale-95 sm:px-8 sm:py-3.5 sm:text-[18px]">
          Join as Creator
        </button>
      </div>
    </section>
  );
};

export default Potential;
