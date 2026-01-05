function ProjectLinks({ github, demo }) {
  const linkStyles =
    "text-white flex items-center rounded-3xl p-1 px-2 border border-(--primary) hover:border-gray-300/25 duration-200";

  return (
    <div className="flex justify-evenly lg:justify-start lg:inline-flex flex-wrap gap-6 pt-6 mb-6 lg:mb-0">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className={linkStyles}
        aria-label="View Github repository"
      >
        <lord-icon
          src="https://cdn.lordicon.com/lllcnxva.json"
          trigger="loop"
          colors="secondary:#16c72e"
        />
        Github Repository
      </a>

      <a
        href={demo}
        target="_blank"
        rel="noopener noreferrer"
        className={linkStyles}
        aria-label="View live demo"
      >
        <lord-icon
          src="https://cdn.lordicon.com/vduvxizq.json"
          trigger="loop"
          delay="500"
          colors="primary:#16c72e"
          style={{ transform: "rotate(320deg)" }}
        />
        Live Demo
      </a>
    </div>
  );
}

export default ProjectLinks;
