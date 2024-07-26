import React, { useState } from "react";
import "./test.css";
import Input from "../../components/UIElements/Input";
// import { VALIDATOR_REQUIRE } from "../util/validators";
const Test = () => {
  // state to keep track of login status, initially false (user isn't logged in)
  const [signedIn, setSignedIn] = useState(false);

  // function to run when input is submitted
  const inputHandler = () => {};
  return (
    <div className="test-background">
      <h1> TESTING PAGE</h1>
      <Input />
    </div>
  );
};

export default Test;
