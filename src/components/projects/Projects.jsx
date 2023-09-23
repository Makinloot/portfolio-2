/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Heading from "../Heading";
import { projects } from "../../data";
import "./Projects.css";
export default function Projects() {
  return (
    <section className="Projects py-12 overflow-x-hidden" id="projects-section">
      <div className="container">
        <div className="Projects-wrapper">
          <div className="mb-12">
            <Heading value={"Projects"} />
          </div>
          <div className="Projects-items">
            {projects.map((project, i) => (
              <div key={i} className="mt-4">
                <Project {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Project({ name, img, link, tech }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="Project bg-[#4a68968c] p-2 rounded-sm"
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
          className="underline"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          Check out
        </motion.a>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        className="my-4"
      >
        <img src={img} alt={name} />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-sm"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
        facilis consequatur corporis quis exercitationem ea repellendus ex
        possimus, maxime, hic sequi nobis culpa voluptas ab perferendis
        reiciendis. Natus, quod incidunt?
      </motion.p>
      <div className="tech-wrapper flex mt-3">
        {tech.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: i * 0.35 }}
            key={item.id}
            className="w-8"
          >
            <img src={item.icon} alt={item.name} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
