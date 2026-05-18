"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./projects.module.css";
import ProjectCard from "./ProjectCard";
import { PROJECTS_DATA } from "../../../data/projectsData";

const ProjectModal = dynamic(() => import("./ProjectModal"));

function Projects() {
  const [openModalId, setOpenModalId] = useState(null);

  const handleOpenModal = (projectId) => setOpenModalId(projectId);
  const handleCloseModal = () => setOpenModalId(null);

  return (
    <section
      className="projects px-3 lg:px-12 border-t border-b border-gray-300/25 mb-10 py-12"
      id="projects"
    >
      <h2 className="uppercase text-white text-3xl mt-5 font-bold mb-6 text-center md:text-start">
        My Projects
      </h2>

      <div className="project-content p-5 flex flex-col items-center gap-12">
        {PROJECTS_DATA.map((project) => (
          <article key={project.id}>
            <ProjectCard
              project={project}
              onOpenModal={() => handleOpenModal(project.id)}
              styles={styles}
            />

            <ProjectModal
              project={project}
              isOpen={openModalId === project.id}
              onClose={handleCloseModal}
              styles={styles}
            />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;