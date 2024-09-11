import React from "react";
import SecondStepForm from "./SecondStepForm";
import SecondStepBackButton from "./SecondStepBackButton";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";
import "./SecondStep.css";
const SecondStep = () => {
  const navigate = useNavigate();
  const formHandler = async (event) => {
    event.preventDefault();
    navigate("/third"); // re-routes user to main page

    // ==== SIGN UP ====
    // try {
    //   await sendRequest(
    //     `http://localhost:5000/api/user/`,
    //     "POST",
    //     JSON.stringify(formData),
    //     {
    //       "Content-Type": "application/json",
    //     }
    //   );
    //   console.log("SUCCESSFUL SIGNUP");
    //   setSuccessfulSignUpState(true);
    // } catch (err) {
    //   setEmailError(true);
    // }
    // // ==== lOGIN ====
    // try {
    //   await sendRequest(
    //     `http://localhost:5000/api/user/login`,
    //     "POST",
    //     JSON.stringify(formData),
    //     {
    //       "Content-Type": "application/json",
    //     }
    //   );
    //   console.log("SUCCESSFUL LOGIN");
    //   setSuccessfulLoginState(1);
    // } catch (err) {
    //   console.log("INVALID USER CREDS");
    //   setSuccessfulLoginState(2);
    // }
  };
  return (
    <motion.div
      className="entire-page bg-neutral-content"
      data-theme="autumn"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <React.Fragment>
        <div
          className="flex justify-evenly items-center h-screen gap-200"
          style={{
            transform: "scale(1.0)",
          }}
        >
          <button className="absolute top-0 left-0 btn btn-square ml-4 mt-3">
            <SecondStepBackButton className="h-6 w-6" />
          </button>
          <SecondStepForm
            className="mr-16"
            text="ZIP Code"
            placeHolderText={"12345 "}
            theme="bumblebee"
            formHandler={formHandler}
          />
          <div className="divider divider-primary lg:divider-horizontal font-bold mx-8">
            OR
          </div>
          <SecondStepForm
            placeHolderText="123 Street, City"
            text="Address"
            formHandler={formHandler}
          />
        </div>
      </React.Fragment>
    </motion.div>
  );
};

export default SecondStep;
