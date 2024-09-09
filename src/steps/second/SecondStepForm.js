import React from "react";
import { div } from "framer-motion/client";
function SecondStepForm(props) {
  return (
    <div
      data-theme={props.theme}
      className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
    >
      <form className="card-body">
        <div className="form-control justify-content items-center">
          <label className="label">
            <span className="text-5xl">{props.text}</span>
          </label>
          <div className="mt-4">
            <input
              type="text"
              placeholder={` ${props.text}`}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control justify-content items-center mt-2 mb-1">
          <button className="btn btn-primary">Search</button>
        </div>
      </form>
    </div>
  );
}

export default SecondStepForm;
