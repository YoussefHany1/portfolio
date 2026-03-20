import Navbar from "../components/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Youssef Hany Portfolio",
  description: "Youssef Hany's Portfolio - Front-end Developer using React and Next.js.",
};

export const viewport = {
  themeColor: "#16c72e",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link
          rel="preload"
          href="/fonts/Refinery-25SemiBold-dac0d12b.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://db.onlinewebfonts.com" />
        <link
          rel="preconnect"
          href="https://db.onlinewebfonts.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://cdn.lordicon.com" />
      </head>
      <body className="overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
