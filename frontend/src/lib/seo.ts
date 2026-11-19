import type { Metadata } from "next";

export const SITE_NAME = "Positive Impact";

/** Default social preview image: the home hero photo. */
export const DEFAULT_OG_IMAGE = "/hero-flipped.png";

interface PageMetaInput {
  /** Page title; the root layout appends " | Positive Impact". */
  title: string;
  description: string;
  /** Path for the canonical URL and og:url, e.g. "/courses/time-management". */
  path: string;
  /** Social preview image (a path in /public). Defaults to the home hero photo. */
  image?: string;
  /** Alt text for the social image; defaults to the page title. */
  imageAlt?: string;
  type?: "website" | "article" | "profile";
  /** Use the title as-is (no " | Positive Impact" suffix). */
  absoluteTitle?: boolean;
}

/**
 * Title, description, canonical URL, Open Graph and Twitter card for a page.
 * Relative URLs resolve against metadataBase (NEXT_PUBLIC_BASE_URL).
 */
export function pageMeta({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt,
  type = "website",
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      type,
      siteName: SITE_NAME,
      locale: "en_IN",
      images: [{ url: image, alt: imageAlt ?? title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
