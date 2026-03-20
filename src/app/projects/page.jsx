"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import ProjectCard from "../../components/projects/Card";
import { PROJECTS_DATA } from "../../data/projectsData";
const ProjectModal = dynamic(() => import("../../components/home/Projects/ProjectModal"));
import styles from "../../components/home/Projects/projects.module.css";
import Background from "../../components/background/Background";
import AnimatedContent from "../../animations/AnimatedContent";

function Projects() {
  const [openModalId, setOpenModalId] = useState(null);
  const [filter, setFilter] = useState("All");

  const handleOpenModal = (projectId) => setOpenModalId(projectId);
  const handleCloseModal = () => setOpenModalId(null);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Mobile Apps") return project.id === 4;
    if (filter === "Web") return project.id !== 4;
    return true;
  });

  return (
    <>
      <Background />
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={1}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0}
      >
        <section
          className="relative z-10 projects lg:px-16 lg:h-[calc(100vh-98px)] bg-linear-to-t from-[#101010] to-transparent mt-[98px]"
          id="projects"
        >
          <h2 className="uppercase text-white text-3xl mt-5 font-bold text-center lg:text-start">
            My Projects
          </h2>

          <div className="skills mt-4 lg:ml-2 flex justify-center lg:justify-start">
            <ul className="flex gap-2 text-white">
              <li
                className={`px-4 py-1 rounded-md border cursor-pointer duration-200 ${filter === 'All' ? 'border-(--primary) bg-(--primary) text-black font-semibold' : 'border-gray-300/25 hover:border-(--primary)'}`}
                onClick={() => setFilter('All')}
              >
                All
              </li>
              <li
                className={`px-4 py-1 rounded-md border cursor-pointer duration-200 ${filter === 'Web' ? 'border-(--primary) bg-(--primary) text-black font-semibold' : 'border-gray-300/25 hover:border-(--primary)'}`}
                onClick={() => setFilter('Web')}
              >
                Web
              </li>
              <li
                className={`px-4 py-1 rounded-md border cursor-pointer duration-200 ${filter === 'Mobile Apps' ? 'border-(--primary) bg-(--primary) text-black font-semibold' : 'border-gray-300/25 hover:border-(--primary)'}`}
                onClick={() => setFilter('Mobile Apps')}
              >
                Mobile Apps
              </li>
            </ul>
          </div>

          <div className="project-content p-5 flex items-center justify-center lg:justify-start flex-wrap gap-12">
            {filteredProjects.map((project) => (
              <div key={project.id}>
                <ProjectCard
                  project={project}
                  onOpenModal={() => handleOpenModal(project.id)}
                />

                <ProjectModal
                  project={project}
                  isOpen={openModalId === project.id}
                  onClose={handleCloseModal}
                  styles={styles}
                />
              </div>
            ))}
          </div>
        </section>
      </AnimatedContent>
    </>
  );
}

export default Projects;