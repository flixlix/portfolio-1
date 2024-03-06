import "./globals.scss";
import { ReactNode } from "react";

export const metadata = {
  title: "Tim Niedermeier, Internet of Things, Web Development, App Design",
  description:
    "Portfolio von Tim Niedermeier, Student mit Fokus auf Internet der Dinge (IoT). Erfahrung in Webdesign, App-Design und Physical Computing.",
  keywords: [
    "Tim Niedermeier",
    "IoT",
    "Internet der Dinge",
    "Internet of Things",
    "Portfolio",
    "Student",
    "Webdesign",
    "Web Development",
    "App Design",
    "Physical Computing",
  ],
  category: "technology, web development, app design, physical computing",
  metadataBase: new URL("https://niedermeier.dev"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "https://niedermeier.dev/manifest.webmanifest",
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["my-email", "my-link"],
    },
  },
  openGraph: {
    title: "Tim Niedermeier, Internet of Things, Web Development, App Design",
    description:
      "Portfolio von Tim Niedermeier, Student mit Fokus auf Internet der Dinge (IoT). Erfahrung in Webdesign, App-Design und Physical Computing.",
    url: "https://niedermeier.dev/",
    siteName: "Tim Niedermeier, Portfolio",
    images: [
      {
        url: "https://niedermeier.dev/gallery/person.jpg",
        width: 800,
        height: 600,
        alt: "Tim Niedermeier, Internet of Things, Web Development, App Design",
      },
      {
        url: "https://niedermeier.dev/gallery/person.jpg",
        width: 1800,
        height: 1600,
        alt: "Tim Niedermeier, Internet of Things, Web Development, App Design",
      },
    ],
    locale: "de_DE",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Tim Niedermeier, Internet of Things, Web Development, App Design",
    site: "https://niedermeier.dev",
    description:
      "Portfolio von Tim Niedermeier, Student mit Fokus auf Internet der Dinge (IoT). Erfahrung in Webdesign, App-Design und Physical Computing.",

    images: {
      url: "https://niedermeier.dev/gallery/person.jpg",
      alt: "Tim Niedermeier, Internet of Things, Web Development, App Design",
    },
  },
  themeColor: "rgba(251, 251, 253, 0.8)",
};

const addJsonLd = () => {
  return {
    __html: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Tim Niedermeier, Internet of Things - Gestaltung vernetzter Systeme",
      description:
        "Student mit Fokus auf Internet der Dinge (IoT). Expertise in Webdesign, App-Design und Physical Computing.",
      url: "https://niedermeier.dev",
      sameAs: ["https://www.linkedin.com/in/timniedermeier/"],
      image: "https://niedermeier.dev/person/image.jpg",
      worksFor: {
        "@type": "Organization",
        name: "Mercedes-Benz",
        url: "https://www.mercedes-benz.com/",
      },
      jobTitle: "Student & Praktikant im Bereich IoT",
      knowsAbout: [
        "Internet der Dinge",
        "Webdesign",
        "App-Design",
        "Physical Computing",
      ],
      datePublished: "2024-02-01",
      headline:
        "Tim Niedermeier, Internet of Things - Gestaltung vernetzter Systeme",
    },
  };
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd()}
          key="item-jsonld"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0066cc" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body>{children}</body>
    </html>
  );
}
