/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Heading from "../Heading";
import html from "/skills/html.png";
import css from "/skills/css.png";
import js from "/skills/js.png";
import ts from "/skills/ts.png";
import react from "/skills/react.png";
import node from "/skills/node.png";
import sass from "/skills/sass.png";
import firebase from "/skills/firebase.png";
import git from "/skills/git.png";
import tailwind from "/skills/tailwind.png";

export default function Skills() {
  const technologies = [
    {
      id: 0,
      icon: html,
      name: "HTML",
    },
    {
      id: 1,
      icon: css,
      name: "CSS",
    },
    {
      id: 2,
      icon: sass,
      name: "SCSS",
    },
    {
      id: 3,
      icon: js,
      name: "Javascript",
    },
    {
      id: 4,
      icon: ts,
      name: "Typescript",
    },
    {
      id: 5,
      icon: react,
      name: "React / React Native",
    },
    {
      id: 6,
      icon: node,
      name: "Node JS",
    },
    {
      id: 7,
      icon: firebase,
      name: "Firebase",
    },
    {
      id: 8,
      icon: git,
      name: "Git",
    },
    {
      id: 9,
      icon: tailwind,
      name: "Tailwind CSS",
    },
  ];
  return (
    <div className="Skills py-12 overflow-x-hidden">
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
                // transition={{ duration: 0.3 }}
                key={tech.id}
              >
                <SkillCard icon={tech.icon} name={tech.name} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
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
