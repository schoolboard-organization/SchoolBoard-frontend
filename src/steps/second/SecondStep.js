import React from "react";
import SecondStepForm from "./SecondStepForm";
import { motion } from "framer-motion";
import "./SecondStep.css";
const SecondStep = () => {
  return (
    <motion.div
      className="entire-page bg-neutral-content"
      data-theme="autumn"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 1.5 } }}
    >
      <React.Fragment>
        <div
          className="flex justify-evenly items-center h-screen gap-200"
          style={{
            transform: "scale(1.0)",
          }}
        >
          <SecondStepForm
            className="mr-16"
            text="ZIP Code"
            placeHolderText={"12345"}
            theme="bumblebee"
          />
          <div className="divider divider-primary lg:divider-horizontal font-bold mx-8">
            OR
          </div>
          <SecondStepForm placeHolderText="123 Street, City" text="Address" />
        </div>
      </React.Fragment>
    </motion.div>
  );
};

export default SecondStep;
