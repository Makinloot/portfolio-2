/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Heading from "../Heading";
import Map from "../Map";
import { AiOutlineMail } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";
import { BiMobileVibration } from "react-icons/bi";
import "./Contact.css";
import Form from "../Form";
export default function Contact() {
  return (
    <section className="Contact py-12 overflow-x-hidden" id="contact-section">
      <div className="container">
        <div className="Contact-wrapper relative overflow-y-hidden">
          <div className="mb-12">
            <Heading value={"Contact me"} />
          </div>
          <div className="Contact-details p-2 rounded-sm bg-[#324e77] inline-block lg:mx-16">
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
              initial={{ opacity: 0, width: 0 }}
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
