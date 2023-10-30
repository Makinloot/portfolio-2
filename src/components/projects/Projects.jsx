/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Heading from "../Heading";
import { projects, illustrationProjects } from "../../data";
import "./Projects.css";
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
export default function Projects() {
  const [projectsType, setProjectsType] = useState("web");
  return (
    <section
      className="Projects py-12 overflow-x-hidden min-h-[100vh]"
      id="projects-section"
    >
      <div className="container">
        <div className="Projects-wrapper">
          <div className="mb-12">
            <Heading value={"Projects"} />
          </div>
          <div className="flex gap-2">
            <motion.button
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.8 }}
              className={`py-1 px-4 mb-4 rounded-sm capitalize ${
                projectsType === "web"
                  ? "bg-primary text-black"
                  : "bg-slate-600 text-primary"
              }`}
              onClick={() => setProjectsType("web")}
            >
              web
            </motion.button>
            <motion.button
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.8 }}
              className={`py-1 px-4 mb-4 rounded-sm capitalize ${
                projectsType === "illustration"
                  ? "bg-primary text-black"
                  : "bg-slate-600 text-primary"
              }`}
              onClick={() => setProjectsType("illustration")}
            >
              illustrations
            </motion.button>
          </div>
          <div className="Projects-items my-4">
            {projectsType === "web" ? (
              <div className="grid items-start justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <div key={project.id} className="h-full relative mb-[40px]">
                    <Project {...project} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="">
                <ResponsiveMasonry
                  columnsCountBreakPoints={{ 350: 1, 800: 2, 900: 3 }}
                >
                  <Masonry gutter="40px">
                    {illustrationProjects.map((project) => (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        key={project.id}
                        className="text-center"
                      >
                        <strong className="block my-4 text-2xl capitalize">
                          {project.name}
                        </strong>
                        <Zoom>
                          <img src={project.img} />
                        </Zoom>
                      </motion.div>
                    ))}
                  </Masonry>
                </ResponsiveMasonry>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Project({ name, img, link, tech, description }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="Project bg-[#4a68968c] h-full p-2 rounded-sm max-w-[560px]"
    >
      <div className="mt-2 flex items-center justify-between">
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="font-primaryBold"
        >
          {name}
        </motion.h3>
        <motion.a
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="underline text-blue-400"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          Check out
        </motion.a>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="my-4"
      >
        <Zoom zoomMargin={10}>
          <img src={img} alt={name} />
        </Zoom>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-sm"
      >
        {description}
      </motion.p>
      <div className="tech-wrapper flex mt-3 gap-1 absolute bottom-2">
        {tech.map((item) => (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            key={item.id}
            title={item.name}
            className="w-8"
          >
            <img src={item.icon} alt={item.name} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
