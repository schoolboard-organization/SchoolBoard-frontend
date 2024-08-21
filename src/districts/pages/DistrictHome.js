import React from "react";
import { useParams } from "react-router-dom";
import BoardMemberList from "../../boardMembers/BoardMemberList";

const DistrictHome = () => {
  const districtNumber = useParams().districtNumber;

  return (
    <React.Fragment>
      <h1> DISTRICT HOME FOR {districtNumber}</h1>
      <BoardMemberList districtNumber={districtNumber} />
    </React.Fragment>
  );
};

export default DistrictHome;
