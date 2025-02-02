import type { Metadata } from "next";
import { Abel } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const font = Abel({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Test Google Tag Manager",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
      <GoogleTagManager gtmId="GTM-NDQR3JSB" />
    </html>
  );
}
