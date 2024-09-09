import React from "react";
import { useParams } from "react-router-dom";
import BoardMemberList from "../../boardMembers/BoardMemberList";

import "./DistrictHome.css";

const DistrictHome = () => {
  // grabs district number from url
  const districtNumber = useParams().districtNumber;

  return (
    <React.Fragment>
      <div className="header-container">
        <h1> DISTRICT HOME FOR {districtNumber}</h1>
      </div>
      <BoardMemberList districtNumber={districtNumber} />
    </React.Fragment>
  );
};

export default DistrictHome;
