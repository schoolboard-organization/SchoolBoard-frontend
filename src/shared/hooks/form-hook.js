import { useCallback, useReducer } from "react";

// function that useReducer calls
const formReducer = (state, action) => {
  switch (action.type) {
    // CASE WHEN INPUT_CHANGE...
    case "INPUT_CHANGE":
      // instantiate boolean flag
      let formIsValid = true;

      // loop through all inputs from state.inputs (state.inputs FROM useReducer)
      for (const inputId in state.inputs) {
        // checks if current input is the input that we are changing
        if (inputId === action.inputId) {
          // if overall form is valid and current action is valid, then overall form is valid
          // same for vice versa, update boolean flag accordingly
          formIsValid = formIsValid && action.isValid;
        }

        // if current inputId is not the inputId that we are changing
        else {
          // updates boolean flag by comparing overall form and input that is not being changed
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }

      // after all inputs have been checked
      return {
        ...state, // copies state over
        inputs: {
          ...state.inputs, // copies inputs over

          [action.inputId]: { value: action.value, isValid: action.isValid }, //
        },
        isValid: formIsValid,
      };
    case "SET_DATA":
      return {
        inputs: action.inputs,
        isValid: action.formIsValid,
      };
    // ANY OTHER CASE
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialFormValidity) => {
  // instantiating initial states (inputs, description, etc...)
  const [formState, dispatch] = useReducer(formReducer, {
    // 'inputs' used in formReducer
    inputs: initialInputs,
    isValid: initialFormValidity,
  });

  // useCallBack prevents infinite loop
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  // new function to set data
  const setFormData = useCallback((inputData, formValidity) => {
    dispatch({
      type: "SET_DATA",
      inputs: inputData,
      formIsValid: formValidity,
    });
  }, []);

  return [formState, inputHandler, setFormData];
};
