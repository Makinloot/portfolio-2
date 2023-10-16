/* eslint-disable react/prop-types */
import Lottie from "lottie-react";
import successAnimation from "../animations/success-animation.json";
import errorAnimation from "../animations/error-animation.json";
import { AiOutlineClose } from "react-icons/ai";
import successIcon from "/success.png";
import errorIcon from "/error.png";
import { motion } from "framer-motion";
import { useAppContext } from "../context/ContextProvider";

export default function Popup({ error }) {
  const { setShowPopup } = useAppContext();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="Popup"
    >
      <div className="container">
        <div className="Popup-wrapper fixed top-0 left-0 z-[2000] bg-black/60 w-full h-screen flex items-center justify-center">
          <div className="w-[90%] py-2 rounded-sm max-w-[400px] bg-[#324e77] relative">
            {error ? (
              <div className="absolute top-[-130px] w-full">
                <Lottie
                  animationData={errorAnimation}
                  className="relative z-[-1]"
                />
              </div>
            ) : (
              <div className="absolute top-[-270px] w-full">
                <Lottie
                  animationData={successAnimation}
                  className="relative z-[-1]"
                />
              </div>
            )}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="bg-red-500/60 rounded-sm mx-2 cursor-pointer relative z-[2000]"
              onClick={() => setShowPopup(false)}
            >
              <AiOutlineClose size={28} />
            </motion.button>
            <div className="my-2 py-2 bg-[#253957]">
              <motion.h4
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="font-primaryBold text-lg text-center"
              >
                {error
                  ? "Oops, unable to submit form"
                  : "Thank you for getting in touch!"}
              </motion.h4>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="my-4 px-2 text-lg text-center"
            >
              {error
                ? "Something went wrong, please try again shortly..."
                : "I will get back in touch with you soon! Have a great day!"}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center h-[44px] mb-2"
            >
              {error ? (
                <img src={errorIcon} alt="error" className="w-[44px]" />
              ) : (
                <img src={successIcon} alt="success" className="w-[44px]" />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
