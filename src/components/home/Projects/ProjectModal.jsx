import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import ProjectDetails from "./ProjectDetails";
import ProjectLinks from "./ProjectLinks";

function ProjectModal({ project, isOpen, onClose, styles }) {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={onClose}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full lg:items-center justify-center py-5 px-6 lg:px-16">
          <DialogPanel
            transition
            className="w-full min-w-full max-w-md rounded-xl bg-white/1 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            <DialogTitle as="div" className="dialog-title flex justify-between">
              <h3 className="text-4xl font-bold text-white">{project.title}</h3>
              <div className="h-fit">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-(--primary) px-3 py-1.5 text-2xl font-semibold text-black shadow-inner shadow-white/10 hover:bg-[#00ff23]"
                  onClick={onClose}
                >
                  X
                </Button>
              </div>
            </DialogTitle>

            <div className="dialog-body flex flex-wrap text-left">
              <div className="description lg:sticky h-full float-left w-full lg:w-1/3 lg:pl-12 py-6 lg:px-12 top-0 text-white">
                <h3 className="font-bold mb-4 text-xl">Project description</h3>

                <ProjectDetails details={project.details} />

                <div className={`skills pt-4 ${styles.skills}`}>
                  <h5 className="font-semibold mb-2">
                    Skills and deliverables
                  </h5>
                  <ul className="p-0 flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="px-4 py-1 rounded-md border border-gray-300/25 hover:border-(--primary) duration-200"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <ProjectLinks github={project.github} demo={project.demo} />
              </div>

              <div className="w-full lg:w-2/3 lg:px-12 mt-6">
                {project.screenshots.map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    className="rounded mb-6 aspect-video"
                    loading="lazy"
                    alt={`${project.title} screenshot ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default ProjectModal;
