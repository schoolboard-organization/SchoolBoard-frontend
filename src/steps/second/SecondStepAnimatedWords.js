import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./SecondStep.css";

const SecondStepAnimatedWords = (props) => {
  return (
    <div style={{ color: props.textColor }}>
      <TypeAnimation
        key={props.loginState}
        className="typing-animation"
        sequence={["Be our Guest!"]}
        speed={10}
        cursor={false}
        style={{
          fontSize: "3em",
          height: "100px",
          width: "690px",
          display: "block",
        }}
        preRenderFirstString={false}
        repeat={0}
      />
    </div>
  );
};

export default SecondStepAnimatedWords;
