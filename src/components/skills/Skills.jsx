/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Heading from "../Heading";
import { technologies } from "../../data";
import Lottie from "lottie-react";
import skillsAnimation from "../../animations/skills-animation.json";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="Skills py-12 overflow-x-hidden" id="skills-section">
      <div className="container">
        <div className="Skills-wrapper">
          <div className="">
            <Heading value={"What i do"} />
          </div>
          {/* container */}
          {/* <div className="lg:grid grid-cols-2 lg:py-12 items-center"> */}
          <div className="relative my-12">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="Skills-animation absolute !top-[50%] !left-[50%] !-translate-y-1/2 !-translate-x-1/2 z-[-100]"
            >
              <Lottie
                animationData={skillsAnimation}
                className="relative z-[-1]"
              />
            </motion.div>
            <div className="Skills-tech grid grid-cols-2 gap-4 lg:grid-cols-3 px-4 lg:px-0 pointer-events-none lg:pointer-events-auto">
              {technologies.map((tech, i) => (
                <motion.div
                  initial={
                    i % 2 === 0
                      ? {
                          opacity: 0,
                          x: -70,
                          background: "#4a6896e1",
                        }
                      : {
                          opacity: 0,
                          x: 70,
                          background: "#4a6896e1",
                        }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{
                    scale: 1.2,
                    background: "#4a6896",
                    outline: "1px solid #bbb",
                    borderRadius: "4px",
                  }}
                  key={tech.id}
                  className="overflow-hidden"
                >
                  <SkillCard icon={tech.icon} name={tech.name} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ name, icon }) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 2 }}
      className="Skills-icon-wrapper flex flex-col items-center justify-center py-5 rounded-sm md:py-12 select-none"
    >
      <motion.div
        whileInView={{
          rotate: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 13, 12,
            11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7,
            -8, -9, -10, -11, -12, -13, -14, -15, -14, -13, -12, -11, -10, -9,
            -8, -7, -6, -5, -4, -3, -2, -1, 0,
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <img src={icon} alt={name} />
      </motion.div>
      <div className="Skills-icon-text text-sm mt-1 text-center">
        <strong>{name}</strong>
      </div>
    </motion.div>
  );
}
