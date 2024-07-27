import { motion } from "framer-motion";

export function Motion({ className, children }) {
  return (
    <motion.div
      initial={{ y: 8, opacity: 0.5 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
