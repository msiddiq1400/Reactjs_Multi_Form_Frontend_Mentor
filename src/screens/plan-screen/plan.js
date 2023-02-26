import React, { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import "./plan.scss";
import { useNavigate } from "react-router-dom";
import PlanCard from "../../components/plan-card/plan-card";
import ArcadeIcon from "../../assets/images/icon-arcade.svg";
import AdvancedIcon from "../../assets/images/icon-advanced.svg";
import ProIcon from "../../assets/images/icon-pro.svg";
import { Switch } from "@mui/material";

const switchStyle = {
  "& .MuiSwitch-track": {
    backgroundColor: "red",
  },
};

const getCheckedPlan = (val) => {
  switch (val) {
    case "arcade":
      return { arcadeSelected: true };
    case "advance":
      return { advanceSelected: true };
    case "pro":
      return { proSelected: true };
    default:
      return;
  }
};

const initialState = {
  arcadeSelected: false,
  advanceSelected: false,
  proSelected: false,
};

const Plans = () => {
  const navigate = useNavigate();
  const [plan, setSelectedPlan] = useState(initialState);
  const [toggleSwitch, setToggleSwitch] = useState(false);

  const handleToggleSwitch = () => {
    setToggleSwitch((prev) => !prev);
  };

  const handlePlanClick = (selected) => {
    setSelectedPlan({ ...initialState, ...getCheckedPlan(selected) });
    console.log(plan);
  };

  return (
    <div className="plan-container">
      <div className="plan-card">
        <Sidebar selectedTab="plan" />
        <div className="plan-content">
          <div className="plan-header-wrapper">
            <div className="plan-header">Select your plan</div>
            <div className="plan-desc">
              You have the option of monthly or yearly biling.
            </div>
          </div>
          <div className="plans-wrapper">
            <div onClick={() => handlePlanClick("arcade")}>
              <PlanCard
                selected={plan.arcadeSelected}
                icon={ArcadeIcon}
                text="Arcade"
                price="$9/mo"
              />
            </div>
            <div onClick={() => handlePlanClick("advance")}>
              <PlanCard
                selected={plan.advanceSelected}
                icon={AdvancedIcon}
                text="Arcade"
                price="$12/mo"
              />
            </div>
            <div onClick={() => handlePlanClick("pro")}>
              <PlanCard
                selected={plan.proSelected}
                icon={ProIcon}
                text="Arcade"
                price="$15/mo"
              />
            </div>
          </div>
          <div className="plan-billing">
            <p className={!toggleSwitch ? "plan-billing-bold" : ""}>Monthly</p>
            <Switch
              checked={toggleSwitch}
              onChange={handleToggleSwitch}
              sx={switchStyle}
            />
            <p className={toggleSwitch ? "plan-billing-bold" : ""}>Yearly</p>
          </div>
          <div className="button-container">
            <button
              className="submit-button"
              type="button"
              onClick={() => navigate("/addons")}
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

export default Plans;
