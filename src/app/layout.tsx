import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "800", "900"],
  variable: "--font-poppins", // ← ei line add koro
});

export const metadata: Metadata = {
  title: "ByteSpace",
  description: "A portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased">
        <Toaster position="bottom-right" richColors />
          {children}
      </body>
    </html>
  );
}
