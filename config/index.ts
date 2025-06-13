import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: {
    default: "Igristechnos",
    template: "%s | Igristechnos",
  },
  description:
    "Igristechnos is a full stack software development company specializing in mobile app development, website & web app development, custom software solutions, and UI/UX design. We deliver innovative, user-friendly, and scalable digital products for businesses worldwide.",
  keywords: [
    "Igristechnos",
    "igristechnos",
    "software development",
    "mobile app development",
    "website development",
    "web app development",
    "custom software",
    "Tamil Nadu IT company",
    "technology services",
    "digital solutions",
    "UI/UX design",
    "full stack development",
    "Android development",
    "iOS development",
    "desktop apps",
    "business software",
    "enterprise software",
    "India software company",
  ],
  openGraph: {
    title: "Igristechnos",
    description:
      "Innovative full stack development company crafting mobile apps, websites, and custom software for global businesses.",
    url: "https://igristechnos.com", // Replace with your domain
    siteName: "Igristechnos",
    images: [
      {
        url: "https://igristechnos.com/og-image.jpg", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Igristechnos - Full Stack Software Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Igristechnos",
    description:
      "We create scalable mobile and web solutions for businesses worldwide. Explore our tech-driven innovation.",
    images: ["https://igristechnos.com/twitter-card.jpg"], // Replace with actual image URL
    site: "@Igristechnos", // Twitter handle (if available)
    creator: "@Igristechnos", // Creator handle (if available)
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico", // Optional: if you have an Apple icon
  },
} as const;
