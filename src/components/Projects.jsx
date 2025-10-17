import { useState } from "react";
import { projects } from "../data/projectData";
import { FaLink } from "react-icons/fa";
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleShowMore = (id) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const showModal = (id) => {
    document.getElementById(`modal-${id}`).showModal();
  };

  const closeModal = (id) => {
    document.getElementById(`modal-${id}`).close();
  };

  return (
    <section id="projects" className="w-full py-16">
      <h2 className="text-[32px] md:text-[48px] text-center md:text-left">
        Projects
      </h2>
      <p>Things I've built so far</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project) => {
          const showAll = expandedProjects[project.id] || false;
          const visibleTech = showAll ? project.techstack : project.techstack.slice(0, 6);
          const hasMore = project.techstack.length > 6;

          return (
            <div
              key={project.id}
              className="card bg-base-200 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => showModal(project.id)}
            >
              <figure>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </figure>

              <div className="card-body">
                <h3 className="card-title text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500">{project.description}</p>

                <div
                  className="flex flex-wrap items-center mt-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="font-semibold text-xs mr-1">Tech Stack:</span>
                  {visibleTech.map((tech, index) => (
                    <span key={index} className="text-xs ml-1">
                      {tech}
                      {index < visibleTech.length - 1 && ", "}
                    </span>
                  ))}

                  {hasMore && (
                    <span
                      onClick={() => toggleShowMore(project.id)}
                      className="badge badge-outline text-xs ml-1 cursor-pointer hover:bg-primary hover:text-white transition"
                    >
                      {showAll ? "Show less" : `+${project.techstack.length - 6} more`}
                    </span>
                  )}
                </div>

                {project.livePreview && (
                  <a
                    href={project.livePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-primary text-sm underline flex items-center gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaLink /> Live Preview
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {projects.map((project) => (
        <dialog key={project.id} id={`modal-${project.id}`} className="modal">
          <div className="modal-box max-w-3xl relative">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => closeModal(project.id)}
              >
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg mb-4">{project.title} Samples</h3>
            <div className="carousel w-full">
              {project.images.map((slide, index) => {
                const prevIndex = index === 0 ? project.images.length - 1 : index - 1;
                const nextIndex = index === project.images.length - 1 ? 0 : index + 1;

                return (
                  <div
                    key={index}
                    id={`slide-${project.id}-${index}`}
                    className="carousel-item relative w-full"
                  >
                    <img
                      src={slide}
                      alt={`Slide ${index + 1}`}
                      className="w-full object-contain max-h-[500px] mx-auto rounded-lg"
                    />
                    <div className="absolute left-0 right-0 top-1/2 flex translate-y-0 transform justify-between">
                      <a href={`#slide-${project.id}-${prevIndex}`} className="btn btn-circle bg-amber-600">
                        <FaArrowAltCircleLeft />
                      </a>
                      <a href={`#slide-${project.id}-${nextIndex}`} className="btn btn-circle bg-amber-600">
                        <FaArrowCircleRight />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </dialog>
      ))}
    </section>
  );
};

export default Projects;
