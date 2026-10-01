import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/Vector (4).png";
import floatingCards from "@/assets/Group 7.png";

export default function LoginPage() {
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

      <div className="max-w-[1440px] mx-auto mt-10 gap-10 px-6 lg:gap-0 lg:px-22">
        {/* ================= LOGO ================= */}
        <div className="">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="ByteSpace" width={32} height={32} />
          </Link>
        </div>
        {/* ================= MAIN GRID ================= */}
        <div className="relative z-10 mx-auto grid w-full mt-10 items-center gap-10  lg:grid-cols-2">
          {/* ================= LEFT SIDE ================= */}
          <div className="relative flex flex-col justify-center pt-12 lg:pt-0">
            <div>
              <h2 className="text-xl font-semibold leading-tight text-[#F5F5F6]">
                Sign in with ease
              </h2>

              <p className="mt-4 max-w-[500px] text-sm leading-relaxed text-blue-100">
                Experience a seamless and efficient sign-in process that grants
                you instant access to a world of knowledge.
              </p>
            </div>

            {/* Floating Cards */}
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
            <div className="w-full rounded-3xl bg-white p-8 shadow-2xl sm:p-10 md:p-12 lg:p-14">
              {/* Small label */}
              <span className="text-lg font-medium text-[#003BE2]">
                Sign In
              </span>

              {/* Heading */}
              <h1 className="mt-3 text-3xl font-bold leading-tight text-[#040819] sm:text-[44px]">
                Welcome Back
              </h1>

              {/* Form */}
              <form className="mt-8 space-y-5">
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

                {/* Sign In button */}
                <div className="flex justify-end pt-3">
                  <button
                    type="submit"
                    className="rounded-full bg-[#D4FB20] px-8 py-3 text-sm font-semibold text-[#040819] transition-transform hover:scale-105 active:scale-95"
                  >
                    Sign In
                  </button>
                </div>
              </form>

              {/* ================= OR Divider ================= */}
              <div className="my-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-sm text-[#82868E]">or</span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              {/* ================= Social Login Buttons ================= */}
              <div className="flex items-center justify-center gap-4">
                {/* Facebook */}
                <button
                  type="button"
                  aria-label="Sign in with Facebook"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-200 bg-white transition-colors hover:bg-gray-50"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                      fill="#040819"
                    />
                  </svg>
                </button>

                {/* Google — black monochrome */}
                <button
                  type="button"
                  aria-label="Sign in with Google"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-200 bg-white transition-colors hover:bg-gray-50"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#040819"
                  >
                    <path d="M21.35 11.1H12v2.9h5.35c-.23 1.5-1.74 4.4-5.35 4.4-3.22 0-5.85-2.66-5.85-5.94S8.78 6.52 12 6.52c1.83 0 3.06.78 3.76 1.45l2.56-2.47C16.75 4.02 14.58 3.2 12 3.2c-4.9 0-8.86 3.96-8.86 8.86s3.96 8.86 8.86 8.86c5.11 0 8.5-3.59 8.5-8.65 0-.58-.06-1.02-.15-1.17z" />
                  </svg>
                </button>
              </div>

              {/* ================= Footer link ================= */}
              <p className="mt-10 text-center text-base text-[#4B4C53]">
                New user?{" "}
                <Link
                  href="/register"
                  className="text-[#003BE2] hover:underline"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
