/* eslint-disable react/prop-types */
import Map from "../Map";
import Form from "../Form";
import { motion } from "framer-motion";
import Heading from "../Heading";
import { AiOutlineMail } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";
import { BiMobileVibration } from "react-icons/bi";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { SocialLinks } from "../about/About";
import "./Contact.css";

const Contact = () => {
  return (
    <section
      className="Contact py-12 overflow-x-hidden relative border-y-2 border-[#9e9e9e]"
      id="contact-section"
    >
      <div className="container">
        <div className="mb-12">
          <Heading value={"Contact"} />
        </div>
        {/* CONTACT DETAILS */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col items-center bg-[#94b0f562] rounded-2xl mb-12 max-w-[500px] mx-auto md:max-w-[100%] md:mb-0"
        >
          <div className="md:flex gap-8 py-4 lg:gap-12">
            <div className="flex items-center md:text-lg lg:text-3xl">
              <BiMobileVibration className="text-4xl lg:text-5xl" />
              <strong className="ml-4">+995 592 592 332</strong>
            </div>
            <div className="flex items-center md:text-lg lg:text-3xl my-4">
              <AiOutlineMail className="text-4xl lg:text-5xl" />
              <strong className="ml-4">Itorn9777@gmail.com</strong>
            </div>
            <div className="flex items-center md:text-lg lg:text-3xl">
              <LuMapPin className="text-4xl lg:text-5xl" />
              <strong className="ml-4">Tbilisi, Georgia, 0144</strong>
            </div>
          </div>
          <div className="flex my-8 gap-4">
            <SocialLinks
              icon={<FaGithubSquare />}
              url={"https://github.com/Makinloot"}
            />
            <SocialLinks
              icon={<FaLinkedin />}
              url={"https://www.linkedin.com/in/tornike-epitashvili-274906180/"}
            />
            <SocialLinks
              icon={<FaInstagramSquare />}
              url={"https://www.instagram.com/seed_9777/"}
            />
          </div>
        </motion.div>
        <div className="Contact-wrapper flex">
          <div className="flex-1 flex items-center justify-center mt-28 md:mt-0">
            <Form />
          </div>
          <div className="md:flex-1 md:flex">
            <motion.div
              initial={{ width: 100 }}
              whileInView={{ width: "100vw" }}
              transition={{ type: "spring", duration: 1 }}
              className="Map-wrapper absolute h-full right-0 top-0 z-[-1000]"
            >
              <Map />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
