import { useState, lazy } from "react";
import styles from "./projects.module.css";
import ProjectCard from "./ProjectCard";
const ProjectModal = lazy(() => import("./ProjectModal"));

// Project data configuration
const PROJECTS_DATA = [
  {
    id: 1,
    title: "MegaMart – Responsive Next.js E-commerce Front-End",
    description:
      "MegaMart is a modern, performance-optimized front-end e-commerce application designed to deliver a seamless shopping experience across devices. Built with Next.js and styled with Bootstrap, the project leverages both server-side rendering (SSR) and static site generation (SSG) to balance SEO needs and fast page loads.",
    thumbnail: "/screenshots/megamart/1.webp",
    screenshots: [
      "/screenshots/megamart/1.webp",
      "/screenshots/megamart/2.webp",
      "/screenshots/megamart/3.webp",
      "/screenshots/megamart/4.webp",
      "/screenshots/megamart/5.webp",
      "/screenshots/megamart/6.webp",
    ],
    details: {
      overview:
        "MegaMart is a modern, responsive e-commerce storefront built with Next.js 16 (App Router) and React 19. It is designed to provide a seamless shopping experience with dynamic product routing, a fully functional shopping cart managed by Zustand, and Firebase integration for authentication. The application currently showcases products via a static JSON store while preparing for full backend integration.",
      scope:
        "This project delivers a high-performance e-commerce frontend that enables users to browse product categories, view detailed item pages, and manage a persistent shopping cart, featuring a responsive design and smooth navigation.",
      techStack: [
        "Next.js App Router: for file-based routing and server-side rendering (v16.1.1).",
        "React 19 & Tailwind CSS: for building a modern, responsive, and utility-first user interface.",
        "Zustand: for lightweight and persistent global state management (Shopping Cart).",
        "Firebase: integrated for user authentication and backend services.",
        "Splide.js: for creating responsive and touch-friendly product carousels.",
      ],
      features: [
        "Dynamic Routing: Automatically generated category and product detail pages.",
        "Persistent Shopping Cart: Add, remove, and adjust quantities with local storage persistence via Zustand.",
        "Responsive Design: Optimized layout for both mobile and desktop devices using Tailwind CSS.",
        "Interactive UI: Features product carousels and modular components for top categories and brands.",
        "Authentication Ready: Configured with Firebase Authentication for user management.",
        "Client-side Data Fetching: Efficiently loads product data from local stores.",
      ],
      futureEnhancements: [
        "Integrate a real backend (GraphQL or REST API) to replace static JSON data.",
        "Implement full checkout workflows and payment gateway integration.",
        "Add user profiles and order history.",
        "Enhance SEO optimizations and performance audits.",
      ],
    },
    skills: ["Next.js", "React", "Tailwind CSS", "Firebase", "Zustand"],
    github: "https://github.com/YoussefHany1/megamart",
    demo: "https://megamart1.vercel.app/",
  },
  {
    id: 2,
    title: "Gaming Zone – Gaming News Aggregator",
    description:
      "Gaming Zone is a dynamic and responsive web application built with Next.js that aggregates and displays the latest gaming news from multiple trusted sources like IGN, Game Informer, and VG247. Designed for gaming enthusiasts, the platform collects articles via RSS feeds, converts them into structured JSON, and presents them in an engaging and modern UI.",
    thumbnail: "/screenshots/gaming-zone/1.webp",
    screenshots: [
      "/screenshots/gaming-zone/1.webp",
      "/screenshots/gaming-zone/2.webp",
      "/screenshots/gaming-zone/3.webp",
      "/screenshots/gaming-zone/4.webp",
      "/screenshots/gaming-zone/5.webp",
    ],
    details: {
      overview:
        "Gaming Zone is a dynamic and responsive web application built with Next.js that aggregates and displays the latest gaming news from multiple trusted sources like IGN, Game Informer, and VG247. Designed for gaming enthusiasts, the platform collects articles via RSS feeds, converts them into structured JSON, and presents them in an engaging and modern UI.",
      scope:
        "This project delivers a responsive Next.js web app that aggregates gaming news from RSS feeds, converting them into JSON and presenting real-time updates in a fast, user-friendly interface.",
      techStack: [
        "Next.js App Router: for file-based routing and server-side rendering.",
        "Tailwind CSS: utility-first styling for responsive UI.",
        "RSS to JSON Conversion: server-side fetching and parsing of RSS feeds for structured display.",
        "Reusable Components: clean modular architecture with separate components for cards, headers, footers, etc.",
        "API Handling: built-in fetch functions to handle multiple RSS sources seamlessly.",
      ],
      features: [
        "Live News Feed: Automatically fetches and updates gaming articles from multiple RSS sources.",
        "Fast Performance: Uses Next.js App Router for optimized performance, image loading, and SEO.",
        "Dark Mode Support: User-friendly experience with support for both light and dark themes.",
        "Responsive Design: Fully mobile-compatible layout using Tailwind CSS.",
        "Category Filtering: Easily filter articles by source (e.g. VG247, IGN, Saudi Gamer).",
        "Search Capability: Quickly find specific games or topics.",
        "Error Toasts & Alerts: Real-time toast messages for loading errors or connectivity issues.",
      ],
      futureEnhancements: [
        "Add AI-powered article summarization for quicker reads.",
        "Enable user notifications for breaking news.",
        "Add user accounts and article saving.",
        "Integrate calendar for upcoming game releases and events.",
        "Support for multiple languages and regions.",
      ],
    },
    skills: ["Next.js", "TailwindCSS"],
    github: "https://github.com/YoussefHany1/gaming-zone",
    demo: "https://gznews.vercel.app/",
  },
  {
    id: 4,
    title: "Automated Gaming Content Aggregator & Tracker App",
    description:
      "Gaming Zone is a comprehensive mobile application built with React Native and Expo. It serves as a central hub for gamers to track news, discover free games, and manage their personal game libraries, supported by a robust Appwrite and Firebase backend.",
    thumbnail: "/screenshots/gamingzoneapp/1.png",
    screenshots: [
      "/screenshots/gamingzoneapp/1.png",
      "/screenshots/gamingzoneapp/2.png",
      "/screenshots/gamingzoneapp/3.png",
    ],
    details: {
      overview:
        "Gaming Zone is a cross-platform mobile application designed to be the ultimate companion for video game enthusiasts. Built with React Native (Expo), it aggregates the latest gaming news, reviews, and hardware updates from global sources. The app also features a dedicated tracker for free game offers on platforms like Epic Games and allows users to build and manage their personal game libraries.",
      scope:
        "The project focuses on delivering a seamless, high-performance mobile experience that solves the fragmentation of gaming content. It integrates automation for news fetching, real-time push notifications for engagement, and offline-first capabilities, showcasing a full-stack implementation with a serverless backend architecture.",
      techStack: [
        "React Native & Expo: for building a high-performance, cross-platform mobile UI.",
        "Appwrite: backend-as-a-service for managing databases, storage, and logic.",
        "Firebase: for secure user authentication and Cloud Messaging (FCM) notifications.",
        "TanStack Query (React Query): for efficient data fetching, caching, and state management.",
        "React Navigation: for complex nested routing and smooth transitions.",
      ],
      features: [
        "News Aggregator: automated fetching of gaming articles and reviews via RSS feeds.",
        "Free Game Alerts: real-time tracking and notifications for limited-time free games.",
        "Personal Library: tools for users to track played, playing, and wishlist games.",
        "Smart Notifications: personalized push alerts for breaking news and offers.",
        "Localization: full multi-language support for English and Arabic (RTL).",
        "Offline Access: intelligent caching to view content without an internet connection.",
        "Search & Discovery: advanced filtering and search capabilities for the game database.",
      ],
      futureEnhancements: [
        "Add social features like user comments and community discussions.",
        "Implement a 'For You' personalized news feed based on reading habits.",
        "Dark Mode / Light Mode toggle for better accessibility.",
      ],
    },
    skills: ["React Native", "Expo", "Appwrite", "Firebase", "JavaScript"],
    github: "https://github.com/youssefhany1/gamingzoneapp",
    demo: "https://play.google.com/store/apps/details?id=com.yh.gamingzone",
  },
  // {
  //   id: 3,
  //   title: "Mohid - Smartwatch E-Commerce Landing Page",
  //   description:
  //     "Mohid is a responsive, single-page landing site prototype for an online smartwatch store. Built with Bootstrap and custom CSS, it showcases featured brands, highlights the latest products, includes customer testimonials, and invites visitors to subscribe to a newsletter.",
  //   thumbnail: "/screenshots/mohid/1.webp",
  //   screenshots: [
  //     "/screenshots/mohid/1.webp",
  //     "/screenshots/mohid/2.webp",
  //     "/screenshots/mohid/3.webp",
  //     "/screenshots/mohid/4.webp",
  //   ],
  //   details: {
  //     overview:
  //       "Mohid is a responsive, single-page landing site prototype for an online smartwatch store. Built with Bootstrap and custom CSS, it showcases featured brands, highlights the latest products, includes customer testimonials, and invites visitors to subscribe to a newsletter.",
  //     scope:
  //       "This project delivers a conversion-focused landing page for smartwatch e-commerce. It emphasizes responsive design, brand highlights, and product presentation while providing a scalable foundation for future integration with real APIs and shopping functionality.",
  //     techStack: [
  //       "HTML5 & CSS3: semantic structure and custom styling.",
  //       "Bootstrap 5: responsive grid system, navbar, dropdowns, and components.",
  //       "Font Awesome: clean and modern icons for UI interactions.",
  //       "Google Fonts (Poppins): consistent and modern typography.",
  //     ],
  //     features: [
  //       "Hero Section: full-screen banner with search and product highlights.",
  //       "Navigation Bar: responsive menu with dropdowns and action icons.",
  //       "Brand Highlights: showcase of major smartwatch brands like Apple, Xiaomi, and FitBit.",
  //       "Latest Products: product cards with images, ratings, and pricing.",
  //       "Customer Testimonials: carousel of reviews with ratings and avatars.",
  //       "Newsletter Subscription: email signup form with call-to-action.",
  //       "Responsive Layout: optimized for desktop, tablet, and mobile devices.",
  //     ],
  //     futureEnhancements: [
  //       "Integrate with a back-end API for dynamic product loading.",
  //       "Implement real cart and user authentication flows.",
  //       "Enhance accessibility (ARIA roles, keyboard navigation).",
  //       "Add animations and lazy-loading for performance optimization.",
  //     ],
  //   },
  //   skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  //   github: "https://github.com/YoussefHany1/mohid",
  //   demo: "https://youssefhany1.github.io/mohid/",
  // },
];

function Projects() {
  const [openModalId, setOpenModalId] = useState(null);

  const handleOpenModal = (projectId) => setOpenModalId(projectId);
  const handleCloseModal = () => setOpenModalId(null);

  return (
    <section
      className="projects px-3 lg:px-12 border-t border-gray-300/25 mb-10 pt-6"
      id="projects"
    >
      <h2 className="uppercase text-white text-3xl mt-5 font-bold mb-6 text-center md:text-start">
        My Projects
      </h2>

      <div className="project-content p-5 flex flex-col items-center gap-12">
        {PROJECTS_DATA.map((project) => (
          <div key={project.id}>
            <ProjectCard
              project={project}
              onOpenModal={() => handleOpenModal(project.id)}
              styles={styles}
            />

            <ProjectModal
              project={project}
              isOpen={openModalId === project.id}
              onClose={handleCloseModal}
              styles={styles}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
