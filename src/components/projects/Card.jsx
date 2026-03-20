import styles from "./card.module.css";
import Image from "next/image";

function ProjectCard({ project, onOpenModal }) {
  return (
    <button onClick={onOpenModal} className={`projectCardWrapper relative rounded-2xl p-[2px] bg-transparent cursor-pointer ${styles.projectCardWrapper}`}>
      <div className="project-card-inner relative z-1 rounded-[14px] w-xs">
        <div className="relative flex justify-between items-center px-4 py-4 rounded-2xl flex-col bg-[#101010] h-72">
          <Image
            src={project.thumbnail}
            width="288"
            height="162"
            className="rounded"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 288px"
            alt={project.title}
          />
          <div className="text text-white mt-3 text-center">
            <h3 className="font-bold text-[22px] mb-3">
              {project.title}
            </h3>

          </div>

        </div>
      </div>
    </button>
  );
}

export default ProjectCard;