/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Formik, Form as FormikForm } from "formik";
import { useRef } from "react";
import validationSchema from "../validationSchema";
import emailjs from "@emailjs/browser";
import { useAppContext } from "../context/ContextProvider";

export default function Form() {
  const formRef = useRef(null);
  const { setShowPopup } = useAppContext();

  function handleSubmit(values, { resetForm }) {
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setShowPopup("success");
          resetForm();
          console.log(`Success: ${JSON.stringify(result)}`);
        },
        (error) => {
          setShowPopup("error");
          resetForm();
          console.log(`Error: ${error}`);
        }
      );
  }

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        subject: "",
        message: "",
      }}
      onSubmit={handleSubmit}
      // onSubmit={(values) => {
      //   handleSubmit(values);
      // }}
      validationSchema={validationSchema}
    >
      {({
        values,
        handleBlur,
        handleChange,
        errors,
        touched,
        isSubmitting,
      }) => (
        <FormikForm
          className="Contact-form max-w-[500px] mx-auto lg:mx-0 lg:!mt-12 overflow-hidden"
          ref={formRef}
          noValidate
        >
          <InputField
            name="name"
            label="Name"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.name}
            error={touched.name && errors.name}
          />
          <InputField
            type={"email"}
            name="email"
            label="Email"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.email}
            error={touched.email && errors.email}
          />
          <InputField
            name={"subject"}
            label={"Subject"}
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.subject}
            error={touched.subject && errors.subject}
          />
          <InputField
            type={"textarea"}
            name={"message"}
            label={"Message"}
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.message}
            error={touched.message && errors.message}
          />

          <div className="flex justify-end my-4">
            <motion.input
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className={`bg-[#324e77] rounded-sm py-2 px-8 capitalize text-white cursor-pointer hover:bg-[#406091] ${
                isSubmitting && "pointer-events-none"
              }`}
              type="submit"
              value="submit"
            />
          </div>
        </FormikForm>
      )}
    </Formik>
  );
}

function InputField({
  type,
  name,
  label,
  handleChange,
  handleBlur,
  value,
  error,
}) {
  return (
    <div className="Input-field mt-2 w-fullrelative">
      <div className="mb-2 mt-4">
        <motion.label
          initial={{ opacity: 0, x: -50 }}
          animate={error ? { opacity: 1, x: 0 } : "initial"}
          className="text-red-500 inline-block"
          htmlFor={name}
        >
          {error}
        </motion.label>
        <motion.label
          initial={{ opacity: 0, x: 50 }}
          animate={!error ? { opacity: 1, x: 0 } : "initial"}
          className="inline-block"
          htmlFor={name}
        >
          {label}
        </motion.label>
      </div>
      {type === "textarea" ? (
        <motion.textarea
          name={name}
          id={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          placeholder={label}
          rows={5}
          autoCorrect="false"
          required
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="w-full p-2 resize-none rounded-sm bg-[#324e77] outline-none focus:bg-[#406091] focus:placeholder:text-primary placeholder:italic placeholder:opacity-50 mb-[-7px]"
        ></motion.textarea>
      ) : (
        <motion.input
          name={name}
          id={name}
          type={type ? type : "text"}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          placeholder={label}
          required
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className={`w-full h-12 px-2 rounded-sm bg-[#324e77] outline-none focus:bg-[#406091] focus:placeholder:text-primary placeholder:italic placeholder:opacity-50`}
        />
      )}
      <motion.div
        initial={{ width: 0 }}
        animate={error ? { width: "99%" } : "initial"}
        className="Input-border-bottom h-[2px] mt-[2px] mx-auto bg-red-500"
      />
    </div>
  );
}
