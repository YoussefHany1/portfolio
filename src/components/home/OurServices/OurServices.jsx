import { useRef } from "react";

const SERVICES_DATA = [
  {
    id: "performance",
    icon: "/icons/performance.json",
    delay: 300,
    title: "Performance Optimization",
    description:
      "Ensure websites are fast and efficient through code optimization and best practices.",
  },
  {
    id: "api",
    icon: "/icons/api.json",
    delay: 1000,
    title: "API Integration",
    description:
      "Connect front-end interfaces with back-end services and display data in engaging formats.",
  },
  {
    id: "responsive",
    icon: "/icons/responsive.json",
    delay: 1000,
    title: "Responsive Web Design",
    description: "Craft mobile-first websites that look great on any device.",
  },
];

function ServiceCard({ service }) {
  const iconRef = useRef(null);

  return (
    <div className="flex-1 min-w-[280px] items-center text-white border-2 border-[#16c72e] lg:border-gray-300/25 transition-all duration-300 mx-4 p-6 text-center rounded-md mb-12 md:mb-0 hover:border-2 hover:border-[#16c72e] lg:hover:shadow-[0_0_20px_5px_#16c72e]">
      <lord-icon
        ref={iconRef}
        src={service.icon}
        trigger="loop"
        delay={service.delay}
        colors="primary:#16c72e"
        style={{ width: "100%", height: "150px" }}
        aria-hidden="true"
      />
      <h3 className="font-bold text-xl mt-4 mb-3">{service.title}</h3>
      <p className="font-sans text-gray-400 leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}

function OurServices() {
  return (
    <section
      className="our-services -mt-24 px-3 mb-10 pt-6 lg:px-12 border-t border-gray-300/25"
      id="services"
      aria-labelledby="services-heading"
    >
      <h2
        id="services-heading"
        className="uppercase text-white text-3xl mt-5 font-bold mb-0 text-center md:text-start"
      >
        Our Services
      </h2>
      <div className="services flex flex-wrap justify-center p-5 gap-4">
        {SERVICES_DATA.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default OurServices;
