import React from "react";
import "./addons.scss";
import Sidebar from "../../components/sidebar/sidebar";
import { useNavigate } from "react-router-dom";
import AddonComponent from "../../components/addon/addon-component";

const Addons = () => {
  const navigate = useNavigate();
  return (
    <div className="addon-container">
      <div className="addon-card">
        <Sidebar selectedTab="addon" />
        <div className="addon-content">
          <div className="addon-header-wrapper">
            <div className="addon-header">Pick add-ons</div>
            <div className="addon-desc">
              Add-ons help enhance your gaming experience
            </div>
          </div>
          <div className="addon-options">
            <AddonComponent
              header="Online Service"
              desc="Access to multiplayer games"
              price="+$1/mo"
            />
            <AddonComponent
              header="Larger Storage"
              desc="Access to multiplayer games"
              price="+$2/mo"
            />
            <AddonComponent
              header="Customizable Profile"
              desc="Custome theme on your profile"
              price="+$2/mo"
            />
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

export default Addons;
