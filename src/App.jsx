import About from "./components/about/About";
import BurgerMenu from "./components/burgerMenu/BurgerMenu";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import { useAppContext } from "./context/ContextProvider";
import { motion } from "framer-motion";

function App() {
  const { showMenu } = useAppContext();
  return (
    <div className="App min-h-[100vh] text-primary font-primary relative">
      <BurgerMenu />
      <Header />
      <div className={`pt-24`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={showMenu ? { opacity: 1 } : "initial"}
          transition={{ duration: 0.5 }}
          className="shadow absolute inset-0 bg-gray-900/80 pointer-events-none"
        ></motion.div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
      {/* for testing purposes */}
    </div>
  );
}

export default App;
