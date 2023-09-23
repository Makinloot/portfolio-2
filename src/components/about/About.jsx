import { motion } from "framer-motion";
import avatar from "/me.png";
import "./About.css";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const name = ["tornike", "epitashvili"];
export default function About() {
  return (
    <section className="About py-12" id="about-section">
      <div className="container">
        <div className="About-wrapper">
          <motion.h1 className="tracking-wide text-3xl font-primaryBold text-center">
            {name[0].split("").map((letter, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                key={i}
                className={`${i === 0 && "capitalize"} inline-block`}
              >
                {letter}
              </motion.span>
            ))}{" "}
            {name[1].split("").map((letter, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: (name[1].length - 1 - i) * 0.07,
                }}
                key={i}
                className={`${i === 0 && "capitalize"} inline-block`}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <div className="flex my-8 justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="img-container w-64 h-64 rounded-full overflow-hidden"
            >
              <img
                src={avatar}
                alt="#"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="my-4">
              <span className="text-gray-500 my-4 font-primaryBold text-3xl heading-span">
                Hello there
              </span>
              <p className="pt-4">
                I&apos;m a React / React Native developer from Tbilisi, Georgia.
                I&apos;m focused on building interesting, mobile friendly
                websites & apps with clean and reusable code. Currently working
                on different projects from home.
              </p>
            </div>
            <div className="flex my-8 text-gray-400">
              <a
                href="https://github.com/Makinloot"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithubSquare size={34} />
              </a>
              <a
                href="https://www.linkedin.com/in/tornike-epitashvili-274906180/"
                target="_blank"
                rel="noreferrer"
                className="mx-2"
              >
                <FaLinkedin size={34} />
              </a>
              <a
                href="https://www.instagram.com/seed_9777/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagramSquare size={34} />
              </a>
            </div>
            <button className="bg-transparent border border-white/60 rounded-sm py-2 px-8">
              Download resume
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
