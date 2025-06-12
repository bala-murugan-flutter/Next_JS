import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = "https://igristechnos.com";

  return [
    {
      url: `${domain}/`,
      lastModified: new Date(),
    },
    {
      url: `${domain}/list`,
      lastModified: new Date(),
    },
    {
      url: `${domain}/gst`,
      lastModified: new Date(),
    },
    {
      url: `${domain}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${domain}/Terms`,
      lastModified: new Date(),
    },
    // External social links
    {
      url: "https://www.youtube.com/@Igristechnos",
      lastModified: new Date(),
    },
    {
      url: "https://x.com/Igristechnos",
      lastModified: new Date(),
    },
    {
      url: "https://www.instagram.com/igristechnos/",
      lastModified: new Date(),
    },
  ];
}
