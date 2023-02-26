import React from "react";
import "./finishing.scss";
import Sidebar from "../../components/sidebar/sidebar";
import { useNavigate } from "react-router-dom";

const Finishing = () => {
  const navigate = useNavigate();
  return (
    <div className="finishing-container">
      <div className="finishing-card">
        <Sidebar selectedTab="finishing" />
        <div className="finishing-content">
          <div className="finishing-header-wrapper">
            <div className="finishing-header">Finishing up</div>
            <div className="finishing-desc">
              Double-check everything looks OK before confirming
            </div>
          </div>
          <div className="button-container">
            <button
              className="submit-button"
              type="button"
              onClick={() => navigate("/finishing")}
            >
              Next Step
            </button>
            <button
              className="go-back-button"
              type="button"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finishing;
