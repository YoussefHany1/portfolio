import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "My Projects",
  description: "Browse the featured web applications developed by Youssef Hany. Featuring high-performance e-commerce storefronts, automated RSS news aggregators, and full-stack solutions built with React, Next.js, and React Native.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "My Projects | Youssef Hany",
    description: "Browse the featured web applications developed by Youssef Hany. Featuring high-performance e-commerce storefronts, automated RSS news aggregators, and full-stack solutions built with React, Next.js, and React Native.",
    url: "https://youssefhany.vercel.app/projects",
    siteName: "Youssef Hany Portfolio",
    images: [
      {
        url: "/icon.svg",
        width: 512,
        height: 512,
        alt: "Youssef Hany Portfolio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}