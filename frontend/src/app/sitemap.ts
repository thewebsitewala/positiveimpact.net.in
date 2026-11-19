import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { trainings } from "@/lib/trainings";
import { liveCourses } from "@/lib/courses";
import { policies } from "@/lib/policies";

type Entry = MetadataRoute.Sitemap[number];

const entry = (
  path: string,
  priority: number,
  changeFrequency: Entry["changeFrequency"] = "monthly",
): Entry => ({ url: `${siteUrl}${path}`, priority, changeFrequency });

/**
 * Every public page, built from the same data as the pages themselves.
 * (No lastModified: a request-time date would break prerendering with
 * cacheComponents; add real dates here if the content gets a CMS.)
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry("/", 1, "weekly"),
    entry("/courses", 0.9, "weekly"),
    entry("/training", 0.9),
    entry("/about", 0.7),
    entry("/harshita-varghese", 0.7),
    entry("/gallery", 0.6),
    entry("/contact", 0.7),
    ...liveCourses.map((c) => entry(`/courses/${c.slug}`, 0.8)),
    ...trainings.map((t) => entry(`/training/${t.slug}`, 0.8)),
    ...policies.map((p) => entry(`/${p.slug}`, 0.3, "yearly")),
  ];
}
