import dynamic from "next/dynamic";
import Background from "../components/background/Background.jsx";
import Header from "../components/home/Header/Header.jsx";
import Aurora from "../animations/Aurora.jsx";
import AnimatedContent from "../animations/AnimatedContent.jsx";
import LordIconInit from "../components/home/LordIconInit.jsx";

const OurServices = dynamic(() =>
  import("../components/home/OurServices/OurServices.jsx")
);
const Skills = dynamic(() => import("../components/home/Skills/Skills.jsx"));
const Projects = dynamic(() =>
  import("../components/home/Projects/Projects.jsx")
);
const Contact = dynamic(() =>
  import("../components/home/Contact/Contact.jsx")
);
const Footer = dynamic(() => import("../components/home/Footer/Footer.jsx"));

function Home() {
  return (
    <>
      <LordIconInit />
      <div className="relative z-10 w-full h-full">
        <Header />
        <OurServices />

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
          <Skills />
        </AnimatedContent>

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
          <Projects />
        </AnimatedContent>

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
          <Contact />
        </AnimatedContent>

        <Footer />
        <Aurora
          colorStops={["#16c72e", "#16c72e", "#16c72e"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>
      <Background />
    </>
  );
}

export default Home;

