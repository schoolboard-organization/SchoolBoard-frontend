import React from "react";
import { Link } from "react-router-dom";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import "./FirstStepForm.css";
/**
 *
 * @param {*} props - contains all handlers and info needed for all form functionalities
 * @returns - login / sign up form for front page
 */
const FirstStepForm = (props) => {
  return (
    <form className="card-body" onSubmit={props.loginHandler}>
      {/* ========== Sign Up / Login toggle ========== */}
      <div className="toggle-button">
        <label className="flex cursor-pointer gap-2">
          <span className="label-text">
            <p>Login</p>
          </span>
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
            onChange={props.toggleHandler}
          />
          <span className="label-text">
            <p>Sign Up</p>
          </span>
        </label>
      </div>
      <div className="form-control">
        {/* ========== Email input field ========== */}
        <label className="label">
          <span className="label-text text-2xl">Email</span>
        </label>
        <input
          autoComplete="username"
          name="user_email"
          type="email"
          placeholder=" email@email.com"
          className="input input-bordered"
          validators={[VALIDATOR_EMAIL()]}
          onChange={props.changeHandler}
          value={props.user_email}
          required
        />
      </div>
      {/* ========== Password input field ========== */}
      <div className="form-control">
        <label className="label">
          <span className="label-text text-2xl">Password</span>
        </label>
        <input
          autoComplete="current-password"
          name="user_password"
          type="password"
          placeholder=" password"
          className="input input-bordered"
          validators={[VALIDATOR_MINLENGTH(5)]}
          onChange={props.changeHandler}
          value={props.user_password}
          required
        />
        {/* ========== Forgot password button ========== */}
        <label className="label">
          <Link to="/second" className="label-text-alt link link-hover">
            Forgot Password?
          </Link>
        </label>
      </div>
      {/* ========== Login / Sign Up Buttons ========== */}
      <div className="form-control mt-6">
        {props.loginState ? (
          <button className="btn bg-accent" type="submit">
            {" "}
            Login{" "}
          </button>
        ) : (
          <button className="btn bg-success" type="submit">
            {" "}
            Sign Up{" "}
          </button>
        )}
        <label className="label">
          <div
            className="small-text-container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* ========== "Continue as Guest" Option ========== */}
            <Link to="/second" className="label-text-alt link link-hover">
              Continue as Guest
            </Link>
          </div>
        </label>
      </div>
    </form>
  );
};

export default FirstStepForm;
