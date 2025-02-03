import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Outfit} from 'next/font/google';
export const metadata:Metadata = {};
const outfit = Outfit({subsets:['latin']});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={outfit.className}
       >
        {children}
      </body>
    </html>
  );
}
