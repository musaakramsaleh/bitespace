import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/Vector (4).png";
import floatingCards from "@/assets/Group 7.png";

export default function Register() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#003BE2] font-sans">
      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      {/* ================= LOGO ================= */}
      <div className="absolute left-6 top-10 z-20 lg:left-22 lg:top-10">
        <Image src={logo} alt="ByteSpace" width={32} height={32} />
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-[1440px] items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-0 lg:px-22">
        {/* ================= LEFT SIDE ================= */}
        <div className="relative flex flex-col justify-center pt-12 lg:pt-0">
          {/* Heading + subtext */}
          <div>
            <h2 className="text-xl font-semibold leading-tight text-[#F5F5F6]">
              Sign up and come in
            </h2>

            <p className="mt-4 max-w-[500px] text-sm leading-relaxed text-blue-100">
              The registration process is straightforward, uncomplicated, and
              efficient, allowing users to sign up quickly, easily, and at no
              cost
            </p>
          </div>

          {/* ================= Floating Cards ================= */}
          <div className="relative mt-10 hidden w-full lg:block">
            <Image
              src={floatingCards}
              alt="Course preview cards"
              priority
              className="h-auto w-full max-w-[500px] object-contain"
            />
          </div>
        </div>

        {/* ================= RIGHT SIDE — FORM CARD ================= */}
        <div className="flex w-full items-center justify-center sm:mt-8 lg:mt-0">
          <div className="w-full max-w-[520px] rounded-3xl bg-white p-8 shadow-2xl sm:p-10 md:p-12 lg:p-14">
            {/* Small label */}
            <span className="text-lg font-medium text-[#003BE2]">
              Create an Account
            </span>

            {/* Heading */}
            <h1 className="mt-3 text-3xl font-bold leading-tight text-[#040819] sm:text-[44px]">
              Welcome to
              <br />
              ByteSpace
            </h1>

            {/* Form */}
            <form className="mt-8 space-y-5">
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#242528]">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Jamie Davis"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#040819] outline-none transition-colors placeholder:text-[#82868E] focus:border-[#003BE2]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#242528]">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="designer@example.com"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#040819] outline-none transition-colors placeholder:text-[#82868E] focus:border-[#003BE2]"
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#242528]">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#040819] outline-none transition-colors placeholder:text-[#82868E] focus:border-[#003BE2]"
                />
              </div>

              {/* Continue button */}
              <div className="flex justify-end pt-3">
                <button
                  type="submit"
                  className="rounded-full bg-[#D4FB20] px-8 py-3 text-sm font-semibold text-[#040819] transition-transform hover:scale-105 active:scale-95"
                >
                  Continue
                </button>
              </div>
            </form>

            {/* Footer link */}
            <p className="mt-12 text-center text-base text-[#4B4C53]">
              Already have an account?{" "}
              <Link href="/login" className="text-[#003BE2] hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
