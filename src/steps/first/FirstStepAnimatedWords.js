import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./FirstStep.css";

const FirstStepAnimatedWords = (props) => {
  return props.loginState ? (
    <div style={{ color: props.textColor }}>
      <TypeAnimation
        key={props.loginState ? "animation1" : "animation2"}
        className="typing-animation"
        sequence={[
          "For Parents",
          900,
          "For Teachers",
          900,
          "For You",
          1000,
          "voteschoolboard.com",
        ]}
        speed={40}
        style={{
          fontSize: "3em",
          height: "200px",
          width: "690px",
          display: "block",
          paddingLeft: 5,
        }}
        preRenderFirstString={false}
        repeat={0}
      />
    </div>
  ) : (
    <div style={{ color: props.textColor }}>
      <TypeAnimation
        key={props.loginState}
        className="typing-animation"
        sequence={["Welcome to", 900]}
        speed={0.5}
        cursor={false}
        style={{
          fontSize: "2em",
          height: "40px",
          width: "690px",
          display: "flex",
          paddingLeft: 5,
        }}
        preRenderFirstString={false}
        repeat={0}
      />
      <TypeAnimation
        className="typing-animation"
        sequence={[
          () => props.setTextColor("oklch(var(--su))"),
          100,
          "voteschoolboard.com",
        ]}
        speed={0.2}
        style={{
          fontSize: "3em",
          height: "150px",
          width: "400x",
          display: "flex",
          paddingLeft: 5,
        }}
        preRenderFirstString={false}
        repeat={0}
      />
    </div>
  );
};

export default FirstStepAnimatedWords;
