import React from "react";
import { useParams } from "react-router-dom";

const DistrictHome = () => {
  const districtNumber = useParams().districtNumber;

  return <h1> DISTRICT HOME FOR {districtNumber}</h1>;
};

export default DistrictHome;
