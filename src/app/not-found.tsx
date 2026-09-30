import Navbar from "@/components/shared/Navbar";
import Link from "next/link";


export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#003be2] font-sans">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "120px 120px",
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        {/* 404 huge number with fade */}
        <div className="relative">
          <h1
            className="select-none text-[180px] font-bold leading-none tracking-tight text-[#D4FB20] sm:text-[240px] md:text-[300px]"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 40%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 40%, transparent 100%)",
            }}
          >
            404
          </h1>
        </div>

        {/* Heading — overlaps the faded number bottom */}
        <h2 className="-mt-16 max-w-[900px] text-3xl font-bold leading-tight text-white sm:-mt-20 sm:text-4xl md:-mt-28 md:text-[72px]">
          The page you are looking
          <br />
          for doesn&apos;t exist
        </h2>

        {/* Subtext */}
        <p className="mt-6 max-w-[480px] text-xs text-blue-100 sm:text-sm">
          Try to use a correct url or go back to homepage to start again
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-8 rounded-full bg-[#D4FB20] px-7 py-3 text-sm font-semibold text-[#040819] transition-transform hover:scale-105 active:scale-95"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
