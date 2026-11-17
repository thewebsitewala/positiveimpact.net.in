import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/layouts/header";
import Footer from "../../components/layouts/footer";
import Preloader from "@/components/Preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leadership Training & Coaching | Positive Impact | India",
  description:
    "Customized leadership and managerial workshops for corporate teams, from first-time managers to CXOs. In-person, virtual and outdoor programs from Bengaluru.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        {/* Without JS the preloader never lifts: hide it and play the hero. */}
        <noscript>
          <style>{`.preloader{display:none!important}.drop,.enter,.settle{animation-play-state:running!important}`}</style>
        </noscript>
        <Preloader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
