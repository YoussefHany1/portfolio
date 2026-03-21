import Image from "next/image";
import dynamic from "next/dynamic";
const SpotlightCard = dynamic(() => import("../../../animations/SpotlightCard.jsx"));
import styles from "./projects.module.css";

function ProjectCard({ project, onOpenModal }) {
  return (
    <div className={`projectCardWrapper relative rounded-2xl p-[2px] bg-transparent ${styles.projectCardWrapper}`}>
      <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(22, 199, 46, 0.2)">
        <div className="project-card-inner relative z-1 rounded-2xl overflow-hidden w-full h-full">
          <div className="relative flex justify-between items-center px-6 py-6 lg:px-12 rounded-2xl lg:flex-row flex-col-reverse">
            <div className="text text-white lg:pr-4 lg:mt-0 mt-3 text-center lg:text-start">
              <h3 className="font-bold text-3xl lg:text-5xl mb-3">
                {project.title}
              </h3>

              <p className="mb-2 lg:mr-18 font-sans text-gray-400">
                {project.description}
              </p>

              <button
                type="button"
                onClick={onOpenModal}
                className="bg-transparent rounded-full w-20 h-20 border-2 border-gray-300/25 hover:border-[#16c72e30] duration-300"
                aria-label={`Open ${project.title} details`}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/vduvxizq.json"
                  trigger="hover"
                  colors="primary:#16c72e"
                  style={{ width: "70px", height: "70px", transform: "rotate(320deg)" }}
                />
              </button>
            </div>
            <figure className="hover-gallery max-w-xl min-w-72">
              {project.screenshots.slice(0, 3).map((screenshot, index) => (
                <Image
                  width={576}
                  height={324}
                  key={index}
                  src={screenshot}
                  className="rounded w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 576px) 100vw, 576px"
                  alt={`${project.title} screenshot ${index + 1}`}
                />
              ))}
            </figure>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}

export default ProjectCard;