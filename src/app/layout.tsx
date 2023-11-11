import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "900", "700"],
});

export const metadata: Metadata = {
  title: "Paks Trust Bank Plc",
  description: "Generated by Paks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  

  return (

      <html lang="en">
        <body className={rubik.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>

  );
}
