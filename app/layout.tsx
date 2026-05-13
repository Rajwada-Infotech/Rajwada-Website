import type { Metadata } from "next";
import "./globals.css";

import {
  DM_Sans,
  Playfair_Display,
  Cormorant_Garamond,
} from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  icons:{
    icon:"/images/favicon.png"
  },
  title: "Rajwada Infotech",
  description: "Luxury ERP Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${dmSans.variable}
          ${playfair.variable}
          ${cormorant.variable}
        `}
      >
        {children}
      </body>
    </html>
  );
}