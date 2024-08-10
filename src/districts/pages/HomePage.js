import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
const HomePage = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [allDistricts, setDistricts] = useState([]);

  useEffect(() => {
    const fetchAllDistricts = async () => {
      try {
        const responseAllDistricts = await sendRequest(
          `http://schoolboard-backend-brd9b8gbdmcjbqaa.eastus-01.azurewebsites.net/api/district/all`
        );

        setDistricts(responseAllDistricts.allDistricts);
        console.log("GET ALL DISTRICTS SUCCESSFUL");
      } catch (err) {}
    };

    fetchAllDistricts();
  }, [sendRequest]);

  return (
    <div className="main-container">
      <h2>MySchoolBoard</h2>
      <div className="search-bar">
        <input type="text" placeholder="Address/Zip" />
        <button>
          <img src="/search-icon.png" alt="Search" />
        </button>
      </div>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}

      {!isLoading && allDistricts.length > 0 && (
        <div className="district-container">
          <ul className="district-list">
            {allDistricts.map((district) => (
              <li key={district._id}>
                {district.districtName} (District #: {district.districtNumber})
              </li>
            ))}
          </ul>
        </div>
      )}
      {!isLoading && allDistricts.length === 0 && (
        <p className="empty-state">No districts found.</p>
      )}
    </div>
  );
};

export default HomePage;
