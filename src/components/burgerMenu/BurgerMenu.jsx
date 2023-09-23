/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useAppContext } from "../../context/ContextProvider";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import "./BurgerMenu.css";

export default function BurgerMenu() {
  const { showMenu, setShowMenu } = useAppContext();
  return (
    <motion.div
      initial={{ x: "-100%", pointerEvents: "none" }}
      animate={showMenu ? { x: 0, pointerEvents: "all" } : "initial"}
      transition={{ duration: 0.4, type: "just" }}
      className="Burger-menu fixed h-screen w-full px-2 z-[1000]"
    >
      <div className="flex justify-end pt-8">
        <motion.button
          initial={{ opacity: 0, x: -100 }}
          animate={showMenu ? { opacity: 1, x: 0 } : "initial"}
          transition={{ delay: showMenu ? 0.4 : 0, duration: 0.3 }}
          onClick={() => setShowMenu(!showMenu)}
        >
          <AiOutlineClose size={44} />
        </motion.button>
      </div>
      <nav className="flex flex-col px-4 mt-8">
        <BurgerLink value={"about me"} delay={0.4} url={"#about-section"} />
        <BurgerLink value={"skills"} delay={0.5} url={"#skills-section"} />
        <BurgerLink value={"projects"} delay={0.6} url={"#projects-section"} />
        <BurgerLink value={"contact"} delay={0.7} url={"#contact-section"} />
      </nav>
      <motion.div
        initial={{ opacity: 0 }}
        animate={showMenu ? { opacity: 1 } : "initial"}
        transition={{ delay: showMenu ? 1 : 0, duration: 0.3 }}
        className="flex my-12 px-4"
      >
        <a href="https://github.com/Makinloot" target="_blank" rel="noreferrer">
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
      </motion.div>
    </motion.div>
  );
}

// animated burger links
function BurgerLink({ value, delay, url }) {
  const { showMenu, setShowMenu } = useAppContext();
  return (
    <motion.a
      initial={{ opacity: 0, x: 80 }}
      animate={showMenu ? { opacity: 1, x: 0 } : "initial"}
      transition={{ delay: showMenu ? delay : 0, type: "spring", damping: 12 }}
      href={url}
      onClick={() => setShowMenu(false)}
      className="mt-4 inline-block font-primaryBold uppercase text-[2rem] sm:text-[3rem]"
    >
      {value}
    </motion.a>
  );
}
