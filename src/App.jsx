import { Suspense } from "react";
import Popup from "./components/Popup";
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
  const { showMenu, showPopup } = useAppContext();

  return (
    <div className="App min-h-[100vh] text-primary font-primary relative overflow-x-hidden">
      <BurgerMenu />
      <Header />
      <div className={`pt-24`}>
        <Suspense fallback={<div className="text-9xl">Loading...</div>}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={showMenu ? { opacity: 1 } : "initial"}
            transition={{ duration: 0.5 }}
            className="shadow absolute inset-0 bg-gray-900/80 pointer-events-none"
          />
          <About />
          <Skills />
          <Projects />
          <Contact />
          {showPopup === "success" && <Popup />}
          {showPopup === "error" && <Popup error />}
        </Suspense>
      </div>
      <Footer />
      {/* for testing purposes */}
    </div>
  );
}

export default App;
