import localFont from "next/font/local";
import Navbar from "../components/navbar/Navbar";
import "./globals.css";

// Load local fonts natively via Next.js Font Optimization to prevent CLS
const blenderPro = localFont({
  src: "../../public/fonts/335787aa6f57d71cabe8eb5dc89c6d6b.woff2",
  variable: "--font-blender-pro",
  display: "swap",
});

const refinery25 = localFont({
  src: [
    {
      path: "../../public/fonts/Refinery-25SemiBold-dac0d12b.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Refinery-25SemiBold-8a4883af.woff",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-refinery-25",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Youssef Hany | Front-End & Mobile App Developer",
    template: "%s | Youssef Hany",
  },
  description: "Youssef Hany's Portfolio - Professional Front-End & Mobile App Developer specializing in building high-performance, responsive React, Next.js, and React Native applications.",
  metadataBase: new URL("https://youssefhany.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Youssef Hany | Front-End & Mobile App Developer",
    description: "Welcome to the professional portfolio of Youssef Hany. Explore custom-crafted, responsive, and performance-optimized web and mobile solutions.",
    url: "https://youssefhany.vercel.app",
    siteName: "Youssef Hany Portfolio",
    images: [
      {
        url: "/icon.svg",
        width: 512,
        height: 512,
        alt: "Youssef Hany Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Youssef Hany | Front-End & Mobile App Developer",
    description: "Explore custom-crafted web and mobile solutions built with React, Next.js, and React Native.",
    images: ["/icon.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#16c72e",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
      </head>
      <body className={`${blenderPro.variable} ${refinery25.variable} overflow-x-hidden`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

