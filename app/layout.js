import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/AuthContext";
import Head from "./head";
import Logout from "@/components/Logout";
const fugaz = localFont({
  src: "./fonts/FugazOne-Regular.ttf",
  variable: "--font-fugaz",
});
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const openSans = localFont({
  src: "../app/fonts/OpenSans-VariableFont_wdth,wght.ttf",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "MoodiMate",
  description: "Track your mood every day",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href={"/"}>
        <h1 className={fugaz.className + ` text-sm md:text-4xl textGradient`}>
        MoodiMate
        </h1>
      </Link>
      <Logout />
    </header>
  );
  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={`${openSans.className}`}>
        Created with ❤️ by{" "}
        <Link href="" className={`textGradient  ${fugaz.className}`}>
          Deepak
        </Link>{" "}
      </p>
    </footer>
  );
  return (
    <html lang="en">
      <Head />
      <AuthProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased w-full max-w-[1000px] mx-auto text-sm  sm:text-base min-h-screen flex flex-col text-slate-800`}
        >
          {header}
          {children}
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
