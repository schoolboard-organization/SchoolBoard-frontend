import React from "react";
function SecondStepForm(props) {
  return (
    <div
      data-theme={props.theme}
      className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
    >
      <form className="card-body" onSubmit={props.formHandler}>
        <div className="form-control justify-content items-center">
          <label className="label">
            <span className="text-5xl" style={{ color: "oklch(var(--ac))" }}>
              {props.text}
            </span>
          </label>
          <div className="mt-4">
            <input
              type="text"
              placeholder={`${props.placeHolderText}`}
              className="input input-bordered input-accent"
              required
            />
          </div>
        </div>
        <div className="form-control justify-content items-center mt-2 mb-1">
          <button className="btn btn-active btn-secondary">Search</button>
        </div>
      </form>
    </div>
  );
}

export default SecondStepForm;
