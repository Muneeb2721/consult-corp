import type { Metadata } from "next";
import { Zilla_Slab } from "next/font/google";
import "./globals.css";

const zilla = Zilla_Slab({
  weight: ["400", "600", "700"], // optional
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Consult Corp",
  description: "Delivering innovative consulting solutions for modern businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={zilla.className}
      >
        {children}
      </body>
    </html>
  );
}
