import React from "react";
import "./SingleDistrict.css";
import { Link } from "react-router-dom";

/**
 * Single District renders a single to be listed on the home page
 * @param {Object} props - All properties that are associated with a single district
 * @param {string} props.districtNumber - The number of the district
 * @param {string} props.districtName - The name of the district
 * @returns {JSX.Element} - A list item representing a single district, where if clicked, sends user to unique district page
 */
const SingleDistrict = (props) => {
  return (
    <li className="single-district">
      <Link to={`/district/${props.districtNumber}`}>
        <div className="single-district-name"> {props.districtName} </div>
      </Link>
    </li>
  );
};

export default SingleDistrict;
