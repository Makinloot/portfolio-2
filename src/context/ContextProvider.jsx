/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const Context = createContext(null);

const useAppContext = () => {
  return useContext(Context);
};

const ContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showPopup, setShowPopup] = useState("");

  const values = {
    showMenu,
    setShowMenu,
    showPopup,
    setShowPopup,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export { ContextProvider, useAppContext };
