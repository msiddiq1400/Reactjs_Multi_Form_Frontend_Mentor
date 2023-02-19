import React from "react";
import SideBarContent from "./sidebar-content";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="main-sidebar">
      <div className="sidebar-content-wrapper">
        <SideBarContent step="1" topText="STEP 1" bottomText="YOUR INFO" />
        <SideBarContent step="2" topText="STEP 2" bottomText="SELECT PLAN" />
        <SideBarContent step="3" topText="STEP 3" bottomText="ADD-ONS" />
        <SideBarContent step="4" topText="STEP 4" bottomText="SUMMARY" />
      </div>
    </div>
  );
};

export default Sidebar;
