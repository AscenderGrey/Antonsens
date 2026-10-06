import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const u = (path: string, priority: number) => ({ url: `${site.url}${path}`, lastModified: now, priority });
  return [
    u("/", 1),
    u("/offert", 0.9),
    ...services.map((s) => u(`/tjanster/${s.slug}`, 0.9)),
    u("/omraden", 0.7),
    ...areas.map((a) => u(`/omraden/${a.slug}`, 0.7)),
    u("/om-fred", 0.6),
  ];
}
