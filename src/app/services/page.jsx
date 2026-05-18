import Background from '../../components/background/Background';
import CircularProgress from '../../components/services/CircularProgress';
import WhatIDo from '../../components/services/whatIDo';
import AnimatedContent from '../../animations/AnimatedContent';

export const metadata = {
  title: "My Services",
  description: "Explore the professional web and mobile development services offered by Youssef Hany. From high-performance Next.js frontends and responsive designs to fully automated mobile apps.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "My Services | Youssef Hany",
    description: "Explore the professional web and mobile development services offered by Youssef Hany. From high-performance Next.js frontends and responsive designs to fully automated mobile apps.",
    url: "https://youssefhany.vercel.app/services",
    siteName: "Youssef Hany Portfolio",
    images: [
      {
        url: "/icon.svg",
        width: 512,
        height: 512,
        alt: "Youssef Hany Services Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

function Services() {
    return (
        <section className="mb-42" aria-label="My Professional Services">
            <Background />
            <div className="relative z-10 bg-linear-to-t from-[#101010] to-transparent mt-[98px]">
                <AnimatedContent
                    distance={100}
                    direction="vertical"
                    reverse={false}
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0}
                >
                    <CircularProgress />
                </AnimatedContent>
                <AnimatedContent
                    distance={100}
                    direction="vertical"
                    reverse={false}
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0.3}
                >
                    <WhatIDo />
                </AnimatedContent>
            </div>
        </section>
    );
}
export default Services;