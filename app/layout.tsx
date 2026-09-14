import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

/* Outfit is the closest Google face to the geometric grotesque in the
   reference deck — wide, low-contrast, double-storey 'a'. Self-hosted by
   next/font at build time rather than fetched from Google per visit. */
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ronn Tristan — Video Editing & Design",
  description:
    "Video editing, motion and design work by Ronn Tristan. Brand strategy, content development and web design for people who need it to actually move.",
  openGraph: {
    type: "website",
    title: "Ronn Tristan — Video Editing & Design",
    description:
      "Video editing, motion and design work by Ronn Tristan.",
  },
};

export const viewport = { themeColor: "#000000" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>{children}</body>
    </html>
  );
}
