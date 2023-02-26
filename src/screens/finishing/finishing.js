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
          <div className="finising-summary">
            <div className="row">
              <div className="row-1">
                <div>Arcade (Yearly)</div>
                <div>Change</div>
              </div>
              <div>$90/yr</div>
            </div>
            <div className="divider"></div>
            <div className="row">
              <div>Online service</div>
              <div>+$10/yr</div>
            </div>
            <div className="row">
              <div>Larger storage</div>
              <div>+20/yr</div>
            </div>
          </div>
          <div className="finishing-total">
            <div>Online service</div>
            <div>+$10/yr</div>
          </div>
          <div className="button-container">
            <button
              className="submit-button"
              type="button"
              onClick={() => navigate("/finishing")}
            >
              Confirm
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
