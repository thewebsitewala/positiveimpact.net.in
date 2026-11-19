import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/layouts/header";
import Footer from "../../components/layouts/footer";
import Preloader from "@/components/Preloader";
import { siteUrl } from "@/lib/site";
import { EnquiryProvider } from "../../components/training/enquiry-dialog";
import JsonLd from "../../components/seo/json-ld";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/seo";
import { organizationSchema } from "@/lib/schema";

const DEFAULT_TITLE = "Leadership Training & Coaching in Bengaluru, India";
const DEFAULT_DESCRIPTION =
  "Customized leadership and managerial workshops for corporate teams, from first-time managers to CXOs. In-person, virtual and outdoor programs from Bengaluru.";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Site-wide SEO defaults. Pages override title, description, canonical and
 * images through pageMeta() in src/lib/seo.ts.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${DEFAULT_TITLE} | ${SITE_NAME}`, template: `%s | ${SITE_NAME}` },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: siteUrl }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Corporate training",
  keywords: [
    "leadership training",
    "corporate training Bengaluru",
    "leadership coaching",
    "managerial skills training",
    "communication skills workshop",
    "first time managers training",
    "train the trainer certification",
    "Positive Impact",
  ],
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    url: "/",
    title: `${DEFAULT_TITLE} | ${SITE_NAME}`,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${DEFAULT_TITLE} | ${SITE_NAME}`,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: "#1c140f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        {/* Without JS the preloader never lifts: hide it and play the hero. */}
        <noscript>
          <style>{`.preloader{display:none!important}.drop,.enter,.settle{animation-play-state:running!important}`}</style>
        </noscript>
        <JsonLd data={organizationSchema()} />
        <Preloader />
        {/* One enquiry popup for the whole site (header, pages, cards). */}
        <EnquiryProvider>
          <Header />
          {children}
          <Footer />
        </EnquiryProvider>
      </body>
    </html>
  );
}
