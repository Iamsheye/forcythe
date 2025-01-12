import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { ReactLenis } from "@/libs/lenis";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Forcythe - Your Partner in Scalable Business Growth | Digital Solutions Expert",
  description:
    "Discover bespoke digital solutions with Forcythe, the growth catalyst for businesses aiming to scale in the US market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className}`}>
        <ReactLenis
          root
          options={{ lerp: 0.2, duration: 1.75, syncTouch: true }}
        >
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
