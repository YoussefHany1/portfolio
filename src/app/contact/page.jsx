import ContactComponents from "../../components/home/Contact/Contact";
import Background from "../../components/background/Background";
import AnimatedContent from '../../animations/AnimatedContent';

export const metadata = {
  title: "Contact Me",
  description: "Get in touch with Youssef Hany for collaborations, hiring inquiries, or custom frontend services. Let's build something exceptional together!",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Me | Youssef Hany",
    description: "Get in touch with Youssef Hany for collaborations, hiring inquiries, or custom frontend services. Let's build something exceptional together!",
    url: "https://youssefhany.vercel.app/contact",
    siteName: "Youssef Hany Portfolio",
    images: [
      {
        url: "/icon.svg",
        width: 512,
        height: 512,
        alt: "Youssef Hany Contact",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

function Contact() {
  return (
    <section aria-label="Contact Information and Form">
      <Background />
      <div className="relative z-10 h-[calc(100vh-98px)] bg-linear-to-t from-[#101010] to-transparent mt-[98px] pt-1 px-4">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
          <ContactComponents titleTag="h1" />
        </AnimatedContent>
      </div>
    </section>
  );
}

export default Contact;
