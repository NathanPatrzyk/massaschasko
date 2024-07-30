import { motion } from "framer-motion";

export function Motion({ className, children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
