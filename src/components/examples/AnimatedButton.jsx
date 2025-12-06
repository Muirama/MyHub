/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import "../../styles/examples.css";

export default function AnimatedButton() {
  return (
    <motion.button
      className="animated-btn"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      Cliquez-moi
    </motion.button>
  );
}
