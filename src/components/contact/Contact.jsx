/* eslint-disable react/prop-types */
import Heading from "../Heading";
import "./Contact.css";
export default function Contact() {
  return (
    <section className="Contact py-12" id="contact-section">
      <div className="container">
        <div className="Contact-wrapper">
          <div className="mb-12">
            <Heading value={"Contact me"} />
          </div>
          <form className="Contact-form" action="#">
            <InputField placeholder={"Name"} />
            <InputField placeholder={"Email"} type={"email"} />
            <InputField placeholder={"Subject"} />
            <InputField placeholder={"Message"} type={"textarea"} />
            <div className="flex justify-end">
              <input
                className="bg-[#4a68968c] rounded-sm py-2 px-8 capitalize text-white"
                type="submit"
                value="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function InputField({ type, placeholder }) {
  if (type === "textarea") {
    return (
      <div className="Input-field mt-2 w-full">
        <textarea
          className="w-full p-2 resize-none rounded-sm bg-[#4a68968c] outline-none focus:bg-[#5a86c78c]"
          rows={5}
          placeholder={placeholder}
          autoCorrect="false"
        ></textarea>
      </div>
    );
  }
  return (
    <div className="Input-field text-primary mt-2 w-full">
      <input
        className="w-full h-12 px-2 rounded-sm bg-[#4a68968c] outline-none focus:bg-[#5a86c78c]"
        type={type ? type : "text"}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
