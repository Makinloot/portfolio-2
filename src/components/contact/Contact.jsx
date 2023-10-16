/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Heading from "../Heading";
import Map from "../Map";
import { AiOutlineMail } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";
import { BiMobileVibration } from "react-icons/bi";
import Form from "../Form";
import "./Contact.css";
import { useEffect, useState } from "react";
export default function Contact() {
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
  return (
    <section className="Contact py-12 overflow-x-hidden" id="contact-section">
      <div className="container">
        <div className="Contact-wrapper relative overflow-y-hidden">
          <div className="mb-12">
            <Heading value={"Contact me"} />
          </div>
          <div className="Contact-details p-2 rounded-sm bg-[#324e77] inline-block">
            <div className="flex items-center">
              <BiMobileVibration size={28} />
              <strong className="ml-4">+995 592 592 332</strong>
            </div>
            <div className="flex items-center my-4">
              <AiOutlineMail size={28} />
              <strong className="ml-4">Itorn9777@gmail.com</strong>
            </div>
            <div className="flex items-center">
              <LuMapPin size={28} />
              <strong className="ml-4">Tbilisi, Georgia, 0144</strong>
            </div>
          </div>
          <div className="">
            <motion.div
              initial={
                dimensions.width >= 800
                  ? { opacity: 0, width: 0 }
                  : { opacity: 0 }
              }
              whileInView={{ opacity: 1, width: "100%" }}
              className="pointer-events-none lg:absolute lg:w-full lg:h-full !top-0"
            >
              <div className="Contact-map-wrapper">
                <Map />
              </div>
            </motion.div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
