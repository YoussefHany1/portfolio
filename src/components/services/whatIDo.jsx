"use client";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
const SpotlightCard = dynamic(() => import('../../animations/SpotlightCard'))

const DETAILED_SERVICES = [
    {
        id: "frontend",
        icon: "/icons/responsive.json",
        delay: 300,
        title: "Front-End Development",
        description: "Crafting scalable and maintainable architectures using React, Next.js, and modern CSS frameworks like Tailwind.",
    },
    {
        id: "integration",
        icon: "/icons/api.json",
        delay: 500,
        title: "API Integration",
        description: "Connecting web apps with headless CMS, RESTful APIs, and databases to create dynamic, data-driven experiences.",
    },
    {
        id: "optimization",
        icon: "/icons/performance.json",
        delay: 700,
        title: "Performance & SEO",
        description: "Optimizing web vitals, implementing Server-Side Rendering (SSR), and ensuring your site ranks high on search engines.",
    },
    {
        id: "maintenance",
        icon: "/icons/send.json",
        delay: 900,
        title: "Deployment & Support",
        description: "Continuous support, code refactoring, and smooth deployment pipelines to keep your applications running flawlessly.",
    },
];

function ServiceFeature({ service }) {
    const iconRef = useRef(null);

    return (
        <SpotlightCard className="custom-spotlight-card flex flex-col xl:flex-row items-center xl:items-start gap-6 p-6 lg:p-8 bg-[#101010] border border-gray-300/25 rounded-xl transition-all duration-300 hover:border-(--primary) hover:shadow-[0_0_20px_5px_rgba(22,199,46,0.2)]" spotlightColor="rgba(22, 199, 46, 0.2)">
            <div className="w-32 h-32 shrink-0 bg-[#cbcbcb1a] rounded-full flex items-center justify-center border-2 border-[#16c72e30]">
                <lord-icon
                    ref={iconRef}
                    src={service.icon}
                    trigger="loop"
                    delay={service.delay}
                    colors="primary:#16c72e"
                    style={{ width: "80px", height: "80px" }}
                    aria-hidden="true"
                />
            </div>
            <div className="text-center xl:text-left mt-2 xl:mt-0">
                <h3 className="text-2xl font-bold text-(--primary) mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed font-sans text-lg">
                    {service.description}
                </p>
            </div>
        </SpotlightCard>
    );
}

function Services() {
    useEffect(() => {
        import("lottie-web/build/player/lottie_light").then((lottie) => {
            import("@lordicon/element").then(({ defineElement }) => {
                if (!customElements.get("lord-icon")) {
                    defineElement(lottie.default.loadAnimation);
                }
            });
        });
    }, []);

    return (
        <div className="container mx-auto px-4 lg:px-16 pt-12">
            <h1 className="uppercase text-white text-4xl font-bold text-center lg:text-start mb-4">
                What I Do
            </h1>
            <p className="text-gray-400 text-center lg:text-start max-w-2xl mb-16 text-lg">
                I specialize in building robust, user-centric web applications. My workflow focuses on code quality, user experience, and modern development standards.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                {DETAILED_SERVICES.map(service => (
                    <ServiceFeature key={service.id} service={service} />
                ))}
            </div>

        </div>
    );
}

export default Services;