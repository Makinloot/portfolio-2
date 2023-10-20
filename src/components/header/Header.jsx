/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { HiMenuAlt3 } from "react-icons/hi";
import { useAppContext } from "../../context/ContextProvider";
import logo from "/logo.png";
import "./Header.css";
export default function Header() {
  const { setShowMenu, showMenu } = useAppContext();
  return (
    <motion.header
      initial={{ opacity: 0, y: "-100%" }}
      animate={!showMenu ? { opacity: 1, y: 0 } : "initial"}
      transition={{ delay: !showMenu ? 0.3 : 0 }}
      className="Header bg-[#11172638] fixed top-0 left-0 z-[1000] w-full"
    >
      <div className="container">
        <div className="Header-wrapper h-24 flex justify-between items-center">
          <div className="logo">
            <img src={logo} />
          </div>
          <Navbar />
          <div className="md:hidden">
            <button onClick={() => setShowMenu(!showMenu)}>
              <HiMenuAlt3 size={44} />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

// create navbar
function Navbar() {
  return (
    <nav className="Navbar hidden md:block">
      <NavLink value={"about me"} delay={0.2} url={"#about-section"} />
      <NavLink value={"skills"} delay={0.4} url={"#skills-section"} />
      <NavLink value={"projects"} delay={0.6} url={"#projects-section"} />
      <NavLink value={"contact"} delay={0.8} url={"#contact-section"} />
    </nav>
  );
}

// create navbar links with animations
function NavLink({ value, delay, url }) {
  return (
    <motion.a
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: delay, type: "spring", damping: 12 }}
      href={url}
      className="cursor-pointer lg:hover:text-lightBlue mr-7 inline-block font-primaryBold uppercase text-[1.25rem]"
    >
      {value}
    </motion.a>
  );
}
