/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext(null);

const useAppContext = () => {
  return useContext(Context);
};

const ContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showPopup, setShowPopup] = useState("");

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Function to update dimensions
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener to update dimensions when the window is resized
    window.addEventListener("resize", updateDimensions);

    // Initial call to set dimensions
    updateDimensions();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const values = {
    showMenu,
    setShowMenu,
    showPopup,
    setShowPopup,
    dimensions,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export { ContextProvider, useAppContext };
