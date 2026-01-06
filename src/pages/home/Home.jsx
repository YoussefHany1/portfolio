import { lazy } from "react";
import lottie from "lottie-web/build/player/lottie_light";
import { defineElement } from "@lordicon/element";
import Background from "../../components/background/Background.jsx";
import Header from "../../components/home/Header/Header.jsx";
const OurServices = lazy(() =>
  import("../../components/home/OurServices/OurServices.jsx")
);
const Skills = lazy(() => import("../../components/home/Skills/Skills.jsx"));
const Projects = lazy(() =>
  import("../../components/home/Projects/Projects.jsx")
);
const Contact = lazy(() => import("../../components/home/Contact/Contact.jsx"));
const Footer = lazy(() => import("../../components/home/Footer/Footer.jsx"));

defineElement(lottie.loadAnimation);

function Home() {
  return (
    <>
      <Background />
      <Header />
      <OurServices />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
export default Home;
