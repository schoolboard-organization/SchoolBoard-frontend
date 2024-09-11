import React from "react";
import { motion } from "framer-motion";
function ThirdStep() {
  return (
    <motion.div
      className="entire-page bg-neutral-content"
      data-theme="autumn"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div>
        <h1>THIRD PAGE</h1>
      </div>
    </motion.div>
  );
}

export default ThirdStep;
