// MORE THAN ONE state: useReducer
import React, { useReducer, useEffect } from "react";
import "./Input.css";
import { validate } from "../../util/validators";

// state: current state (object consisting of key-value pairs)
// action: action is an object
const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state, // copies all key value pairs from state
        value: action.val,
        isValid: validate(action.val, action.validators), // validation logic from validators.js file
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true, // updates the touch state
      };
    default:
      return state;
  }
};

// MAIN COMPONENT TO BE RETURNED
const Input = (props) => {
  // useReducer also returns two things, similar to useState but...
  // first parameter is a function, second parameter is initializing state(s)
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || false,
  });

  // object destructuring
  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]); // check if anything in props (id, value) changes or anything in the state (isValid, onInput) changes

  // sets val & validators to given values AND set type to CHANGE
  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    }); // updates state
  };

  // sets 'type' to TOUCH
  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  // ternary operator: if props.element == "input" then return input tag, otherwise return textarea
  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler} // onBlur checks if user has clicked into input box before
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler} // onBlur checks if user has clicked into input box before
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control  ${
        // if input is invalid and user has 'touched' it before, make input box red (invalid input)
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {/* if input is invalid and user has 'touched' it before, display error text */}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
