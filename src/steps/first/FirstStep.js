import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import * as motion from "framer-motion/client";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import FirstStepForm from "./FirstStepForm";
import FirstStepAnimatedWords from "./FirstStepAnimatedWords";
import SweetAlert from "../../shared/components/UIElements/SweetAlert";
import { useNavigate } from "react-router-dom";
import "./FirstStep.css";

/**
 * @description Front page, allows user to login, sign up or continue as guest
 */
const FirstStep = () => {
  // used to reroute user
  const navigate = useNavigate();

  // from sweetalert2 import, used for error modal
  const MySwal = withReactContent(Swal);

  // custom hook for http requests
  const { isLoading, sendRequest } = useHttpClient();

  /**
   * @textColor : to make "voteschoolboard.com" animation a different color from previous text
   * @loginState : to keep track of login or sign up form state
   * @emailError : to keep track of taken email error
   * @formData : to keep track of data entered in for email and password
   * @successfulLoginState : 0 = neutral, 1 = positive, 2 = negative
   */
  const [textColor, setTextColor] = useState("oklch(var(--a))");
  const [loginState, setLoginState] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [successfulSignUpState, setSuccessfulSignUpState] = useState(false);
  const [successfulLoginState, setSuccessfulLoginState] = useState(0);
  const [formData, setFormData] = useState({
    user_email: "",
    user_password: "",
  });

  // handler for toggle button, changes page from login to sign up
  const toggleHandler = () => {
    if (loginState === false) {
      setLoginState(true);
      setTextColor("oklch(var(--a))");
    } else {
      setLoginState(false);
      setTextColor("oklch(var(--su))");
    }
  };

  // handler for email and password input boxes change via user input
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log("formData Email:", formData.user_email);
    console.log("formData Password:", formData.user_password);
  };

  useEffect(() => {
    if (emailError) {
      SweetAlert({
        width: "320",
        color: "oklch(var(--sc))",
        title: "Oops!",
        text: "That email is already associated with an account!",
        icon: "warning",
        customClass: { confirmButton: "custom-confirm-btn" },
        background: "oklch(var(--b1))",
        showConfirmButton: true,
        timer: 1500,
        didClose: () => {
          setEmailError(false);
        },
      });
    }
    if (successfulSignUpState) {
      SweetAlert({
        width: "320",
        color: "oklch(var(--sc))",
        title: "Success!",
        text: "Thanks for joining us!",
        icon: "success",
        background: "oklch(var(--b1))",
        showConfirmButton: false,
        timer: 1500,
        didClose: () => {
          setSuccessfulSignUpState(false);
          navigate("/second"); // re-routes user to main page
        },
      });
    }
    if (successfulLoginState === 1) {
      MySwal.fire({
        icon: "success",
        title: "Welcome back!",
        showConfirmButton: false,
        timer: 1500,
        didClose: () => {
          setSuccessfulLoginState(0);
          navigate("/second"); // re-routes user to main page
        },
      });
    } else if (successfulLoginState === 2) {
      MySwal.fire({
        icon: "error",
        title: "Invalid Credentials!",
        text: "Double check email and/or password",
        didClose: () => {
          setSuccessfulLoginState(0);
        },
      });
    }
  }, [
    emailError,
    successfulSignUpState,
    successfulLoginState,
    navigate,
    MySwal,
  ]);

  // loginHandler, calls api to sign up / login user depending on state
  const loginHandler = async (event) => {
    event.preventDefault();

    // ==== SIGN UP ====
    if (!loginState) {
      try {
        await sendRequest(
          `http://localhost:5000/api/user/`,
          "POST",
          JSON.stringify(formData),
          {
            "Content-Type": "application/json",
          }
        );
        console.log("SUCCESSFUL SIGNUP");
        setSuccessfulSignUpState(true);
      } catch (err) {
        setEmailError(true);
      }
    } else {
      // ==== lOGIN ====
      try {
        await sendRequest(
          `http://localhost:5000/api/user/login`,
          "POST",
          JSON.stringify(formData),
          {
            "Content-Type": "application/json",
          }
        );
        console.log("SUCCESSFUL LOGIN");
        setSuccessfulLoginState(1);
      } catch (err) {
        console.log("INVALID USER CREDS");
        setSuccessfulLoginState(2);
      }
    }
  };

  return (
    <motion.div
      className="entire-page bg-neutral-content"
      data-theme="autumn"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <React.Fragment>
        <div
          className="hero bg-neutral-content min-h-screen"
          data-theme="autumn"
        >
          <motion.div
            initial={{ backgroundColor: "#E5E0DC" }}
            animate={{
              backgroundColor: loginState ? "#E5E0DC" : "#EDD0D0",
            }}
            transition={{ ease: "linear", duration: 2 }}
            style={{ width: "100vw", height: "100vh" }}
          >
            {/* ========== Loading Spinner  ==========*/}
            {isLoading && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <span className="loading loading-spinner loading-lg text-accent"></span>
              </div>
            )}
            <div className="hero-content flex-col lg:flex-row-reverse ml-16">
              {/* ========== Animated Words (changes depending on login/sign up) ==========*/}
              <div className="lg:text-left">
                <FirstStepAnimatedWords
                  textColor={textColor}
                  loginState={loginState}
                  setTextColor={setTextColor}
                />
              </div>
              <div
                className={`card base-300 w-full max-w-sm shrink-0 shadow-2xl pr-8`}
                style={{
                  transform: "scale(0.80)",
                }}
                data-theme="autumn"
              >
                {/* ========== Login / Sign Up form  ==========*/}
                <FirstStepForm
                  loginHandler={loginHandler}
                  toggleHandler={toggleHandler}
                  changeHandler={changeHandler}
                  user_email={formData.user_email}
                  user_password={formData.user_password}
                  loginState={loginState}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </React.Fragment>
    </motion.div>
  );
};

export default FirstStep;
