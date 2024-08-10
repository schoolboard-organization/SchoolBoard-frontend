import React from "react";
import Input from "../../shared/components/UIElements/Input";
import Button from "../../shared/components/UIElements/Button";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import "./NewDistrict.css";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../shared/context/auth-context";
// import ImageUpload from "../../shared/components/FormElements/ImageUpload";

/**
 * @description Component for adding a new district into the database
 */
function NewDistrict() {
  // auth object
  // const auth = useContext(AuthContext);

  // custom hook
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  // custom use form hook, tracks validity of districtName and districtNumber
  const [formState, inputHandler] = useForm(
    {
      districtName: { value: "", isValid: false },
      districtNumber: { value: "", isValid: false },
      districtZipCode: { value: "", isValid: false },
    },
    false
  );

  // used to reroute after new place has been created
  const navigate = useNavigate();

  // handles submitting a new place to the backend
  const districtSubmitHandler = async (event) => {
    event.preventDefault();

    // logic for submitting a new place to the DB
    try {
      console.log("ABOUT TO POST TO DB");

      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/district/`,
        "POST",
        JSON.stringify({
          districtName: formState.inputs.districtName.value,
          districtNumber: formState.inputs.districtNumber.value,
          districtZipCode: formState.inputs.districtZipCode.value,
        }),
        {
          "Content-Type": "application/json", // declares type to be JSON
        }
      );

      navigate("/allDistricts"); // re-routes user to main page

      console.log();
    } catch (err) {}
  };

  return (
    <div className="new-district-page">
      <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
        <div className="form-container">
          <form className="place-form" onSubmit={districtSubmitHandler}>
            {isLoading && <LoadingSpinner asOverlay />}

            <h2>Create District</h2>

            {/* district name input box */}
            <Input
              id="districtName"
              element="input"
              type="text"
              label="District Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please Enter a District Name"
              onInput={inputHandler}
            />

            {/* district number input box */}
            <Input
              id="districtNumber"
              element="input"
              label="District Number"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please Enter A District Number"
              onInput={inputHandler}
            />

            {/* district zip code input box */}
            <Input
              id="districtZipCode"
              element="input"
              label="District Zip Code"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please Enter A Zip Code"
              onInput={inputHandler}
            />

            {/* submit button that is only clickable if the entire form is valid */}
            <Button type="submit" disabled={!formState.isValid}>
              {" "}
              Create District
            </Button>
          </form>
        </div>
      </React.Fragment>
    </div>
  );
}

export default NewDistrict;
