import React, { useState, useEffect } from "react";
import { useHttpClient } from "../shared/hooks/http-hook";
import ErrorModal from "../shared/components/UIElements/ErrorModal";

// Component for list of all board members in a district
const BoardMemberList = (props) => {
  // use object destructuring on custom hook
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  // useState to keep track of full list of members
  const [memberList, setMemberList] = useState([]);

  // logic to call api to get all members
  useEffect(() => {
    const fetchAllBoardMembers = async () => {
      try {
        const responseAllMembers = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/board/all/${props.districtNumber}` // api url
        );
        setMemberList(responseAllMembers.allBoardMembers); // set array to be response
        console.log("GET ALL MEMBERS SUCCESSFUL");
      } catch (err) {
        console.log("UNSUCCESSFUL GET FOR ALL MEMBERS");
      }
    };
    fetchAllBoardMembers();
  }, [sendRequest, props.districtNumber]);

  return (
    <div className="main-container">
      {/* Error modal if error is encountered */}
      <ErrorModal error={error} onClear={clearError} />

      {!isLoading && memberList.length > 0 && (
        <div className="member-list-container">
          {/* Iterates through list of all members and prints out name, role, and home district */}
          {memberList.map((member) => (
            <div key={member._id} className="member-item">
              <h3>
                {" "}
                {member.member_firstName} {member.member_lastName}
              </h3>
              <p> Role: {member.member_role}</p>
              <p> Home District: {member.member_homeDistrict}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BoardMemberList;
