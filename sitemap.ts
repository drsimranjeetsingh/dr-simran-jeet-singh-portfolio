import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://drsimranjeetsingh.com",
      lastModified: new Date(),
    },
    {
      url: "https://drsimranjeetsingh.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://drsimranjeetsingh.com/expertise",
      lastModified: new Date(),
    },
    {
      url: "https://drsimranjeetsingh.com/cases",
      lastModified: new Date(),
    },
    {
      url: "https://drsimranjeetsingh.com/contact",
      lastModified: new Date(),
    },
  ];
}