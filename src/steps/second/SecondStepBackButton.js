import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
const SecondStepBackButton = () => {
  return (
    <Link to="/first" className="label-text-alt link link-hover">
      <button className="btn btn-square btn-outline">
        <ArrowBackIosNewRoundedIcon className="h-4 w-4" />
      </button>
    </Link>
  );
};

export default SecondStepBackButton;
