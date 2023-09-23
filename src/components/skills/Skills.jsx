/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Heading from "../Heading";
import { technologies } from "../../data";

export default function Skills() {
  return (
    <section className="Skills py-12 overflow-x-hidden" id="skills-section">
      <div className="container">
        <div className="Skills-wrapper">
          <div className="mb-12">
            <Heading value={"What i do"} />
          </div>
          <div className="Skills-tech grid grid-cols-2 gap-4">
            {technologies.map((tech, i) => (
              <motion.div
                initial={
                  i % 2 === 0 ? { opacity: 0, x: -70 } : { opacity: 0, x: 70 }
                }
                whileInView={{ opacity: 1, x: 0 }}
                key={tech.id}
              >
                <SkillCard icon={tech.icon} name={tech.name} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ name, icon }) {
  return (
    <div className="bg-[#4a68968c] flex flex-col items-center justify-center py-5 rounded-sm">
      <div>
        <img src={icon} alt={name} />
      </div>
      <div className="text-sm mt-1">
        <strong>{name}</strong>
      </div>
    </div>
  );
}
