import dynamic from "next/dynamic";
import Header from "../components/home/Header/Header.jsx";
import Background from "../components/background/Background.jsx";
import LazyLoad from "../components/common/LazyLoad.jsx";
const Aurora = dynamic(() => import("../animations/Aurora.jsx"));
const LordIconInit = dynamic(() => import("../components/home/LordIconInit.jsx"));
const AnimatedContent = dynamic(() => import("../animations/AnimatedContent.jsx"));

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
        <LazyLoad minHeight="50vh">
          <OurServices />
        </LazyLoad>

        <LazyLoad minHeight="50vh">
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
        </LazyLoad>

        <LazyLoad minHeight="50vh">
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
        </LazyLoad>

        <LazyLoad minHeight="50vh">
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
        </LazyLoad>

        <LazyLoad minHeight="20vh">
          <Footer />
        </LazyLoad>
        
        <LazyLoad minHeight="10vh">
          <Aurora
            colorStops={["#16c72e", "#16c72e", "#16c72e"]}
            blend={0.5}
            amplitude={1.0}
            speed={1}
          />
        </LazyLoad>
      </div>
      <Background />
    </>
  );
}

export default Home;

