/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import avatar from "/me.png";
import "./About.css";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const name = ["tornike", "epitashvili"];
export default function About() {
  return (
    <section className="About py-12" id="about-section">
      <div className="container">
        <div className="About-wrapper max-w-[600px] mx-auto">
          <h1 className="tracking-wide text-3xl font-primaryBold text-center md:text-5xl lg:text-6xl">
            {name[0].split("").map((letter, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
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
                whileInView={{ opacity: 1 }}
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
          </h1>
          <div className="flex my-8 justify-center md:my-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="img-container w-64 h-64 rounded-full overflow-hidden md:w-96 md:h-96"
            >
              <img
                src={avatar}
                alt="tornike epitashvili image"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="my-4">
              <span className="text-gray-500 my-4 font-primaryBold text-3xl heading-span md:text-5xl">
                Hello there
              </span>
              <p className="pt-4 md:text-xl">
                I&apos;m a React / React Native developer from Tbilisi, Georgia.
                I&apos;m focused on building interesting, mobile friendly
                websites & apps with clean and reusable code. Currently working
                on different projects from home.
              </p>
            </div>
            <div className="flex my-8 text-gray-400">
              <SocialLinks
                icon={<FaGithubSquare />}
                url={"https://github.com/Makinloot"}
              />
              <SocialLinks
                icon={<FaLinkedin />}
                url={
                  "https://www.linkedin.com/in/tornike-epitashvili-274906180/"
                }
                marginx
              />
              <SocialLinks
                icon={<FaInstagramSquare />}
                url={"https://www.instagram.com/seed_9777/"}
              />
            </div>
            <motion.button
              initial={{ background: "transparent" }}
              whileHover={{ scale: 0.9, background: "#94b0f5a1" }}
              transition={{ type: "spring", damping: 8 }}
              className="bg-transparent border border-white/60 rounded-sm py-2 px-8 md:py-4 md:px-16 md:text-xl"
            >
              Download resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SocialLinks({ icon, marginx, url }) {
  return (
    <motion.a
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.2, color: "#94b0f5" }}
      transition={{ type: "spring", damping: 8 }}
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`text-4xl md:text-5xl ${marginx && "mx-2"}`}
    >
      {icon}
    </motion.a>
  );
}
