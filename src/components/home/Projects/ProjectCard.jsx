function ProjectCard({ project, onOpenModal, styles }) {
  return (
    <div
      className={`projectBox relative border border-gray-200/25 flex justify-between items-center px-6 py-6 lg:px-12 rounded-2xl lg:flex-row flex-col-reverse ${styles.projectBox}`}
    >
      <div className="text text-white lg:pr4 lg:mt-0 mt-3 text-center lg:text-start">
        <h3 className="font-bold text-3xl lg:text-5xl mb-3">{project.title}</h3>

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
            style={{
              width: "70px",
              height: "70px",
              transform: "rotate(320deg)",
            }}
          />
        </button>
      </div>

      <img
        src={project.thumbnail}
        width="522"
        height="293"
        className="rounded w-full max-w-xl min-w-72"
        loading="lazy"
        alt={project.title}
      />
    </div>
  );
}

export default ProjectCard;
