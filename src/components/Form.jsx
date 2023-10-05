/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export default function Form() {
  return (
    <form className="Contact-form mt-12 max-w-[500px] mx-auto" action="#">
      <InputField placeholder={"Name"} />
      <InputField placeholder={"Email"} type={"email"} />
      <InputField placeholder={"Subject"} />
      <InputField placeholder={"Message"} type={"textarea"} />
      <div className="flex justify-end">
        <motion.input
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-[#4a68968c] rounded-sm py-2 px-8 capitalize text-white"
          type="submit"
          value="submit"
        />
      </div>
    </form>
  );
}

function InputField({ type, placeholder }) {
  if (type === "textarea") {
    return (
      <div className="Input-field mt-2 w-full">
        <motion.textarea
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="w-full p-2 resize-none rounded-sm bg-[#324e77] outline-none focus:bg-[#406091] focus:placeholder:text-primary"
          rows={5}
          placeholder={placeholder}
          autoCorrect="false"
        ></motion.textarea>
      </div>
    );
  }
  return (
    <div className="Input-field mt-2 w-full">
      <motion.input
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full h-12 px-2 rounded-sm bg-[#324e77] outline-none focus:bg-[#406091] focus:placeholder:text-primary"
        type={type ? type : "text"}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
