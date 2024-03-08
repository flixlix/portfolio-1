import "./globals.scss";
import { ReactNode, useEffect } from "react";
import Script from "next/script";

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
  manifest: "https://niedermeier.dev/manifest.webmanifest",
  autor: {
    name: "Tim Niedermeier",
    email: "tim.niedermeier@yahoo.com",
    country: "Deutschland",
  },
  icon: {
    icon: "/icon.svg",
    shortcut: "/apple-icon.png",
    apple: "/apple-icon.png",
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
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <Script
          id="google-analytics"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tim Niedermeier",
              description:
                "Student mit Fokus auf Internet der Dinge (IoT). Expertise in Webdesign, App-Design und Physical Computing.",
              url: "https://niedermeier.dev",
              sameAs: ["https://www.linkedin.com/in/timniedermeier/"],
              worksFor: {
                "@type": "Organization",
                name: "Mercedes-Benz",
                url: "https://www.mercedes-benz.com/",
              },
              email: "tim.niedermeier@yahoo.com",
              image: "https://niedermeier.dev/person/image.jpg",
              jobTitle: "Student",
              headline: "Tim Niedermeier, Internet of Things - Gestaltung vernetzter Systeme",
            }),
          }}
        />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body>{children}</body>
    </html>
  );
}
