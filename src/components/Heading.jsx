/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
export default function Heading({ value }) {
  return (
    <div className="font-primaryBold text-3xl relative -z-50">
      <h2 className={`whitespace-nowrap text-[#bdc9df]`}>
        {value.split("").map((letter, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            key={i}
          >
            {letter}
          </motion.span>
        ))}
      </h2>
      <h2
        className={`whitespace-nowrap absolute top-[2.4px] left-[2.4px] text-[#5a81c5] -z-50`}
      >
        {value.split("").map((letter, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            key={i}
          >
            {letter}
          </motion.span>
        ))}
      </h2>
    </div>
  );
}
