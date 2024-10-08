import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import SingleDistrict from "./SingleDistrict";
import { motion } from "framer-motion";

/**
 * HomePage component displays all districts to the user
 * @returns {JSX.Element} - Displays a search bar along with all district currently in the DB
 */
const HomePage = () => {
  // custom hook to handle http requests
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  // state to keep track of all of the districts to be displayed on the page
  const [allDistricts, setDistricts] = useState([]);

  // uses custom hooke and useEffect to handle GET request to receive all districts
  useEffect(() => {
    const fetchAllDistricts = async () => {
      try {
        const responseAllDistricts = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/district/all`
        );
        setDistricts(responseAllDistricts.allDistricts); // sets districts to be the districts retrieved from backend
        console.log("GET ALL DISTRICTS SUCCESSFUL");
      } catch (err) {
        console.log("Error in catch block in fetchAllDistricts");
      }
    };
    fetchAllDistricts();
  }, [sendRequest]);

  return (
    <html data-theme="bumblebee">
      <motion.div
        className="main-container"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0, transition: { duration: 1.5 } }}
      >
        {/* Main header and search bar */}
        <h2>MySchoolBoard</h2>

        {/* Error modal if error is encountered */}
        <ErrorModal error={error} onClear={clearError} />

        {/* If page is loading, show loading spinnter */}
        {isLoading && (
          <div className="center">
            <LoadingSpinner />
          </div>
        )}

        {/* If page is not loading and at least one district is present, list off district(s) */}
        {!isLoading && allDistricts.length > 0 && (
          <div className="district-container">
            <ul className="district-list">
              {allDistricts.map((district) => (
                <SingleDistrict
                  key={district._id}
                  districtNumber={district.districtNumber}
                  districtName={district.districtName}
                ></SingleDistrict>
              ))}
            </ul>
          </div>
        )}

        {/* If page isn't loading but there are no districts, also show loading spinner (forever) */}
        {!isLoading && allDistricts.length === 0 && (
          <div>
            {" "}
            <p>NO DISTRICTS </p>
            <LoadingSpinner />
          </div>
        )}
      </motion.div>
    </html>
  );
};

export default HomePage;
