import React, { useEffect, useState } from "react";
import SideBarContent from "./sidebar-content";
import "./sidebar.scss";

const checkWhichTabToHighlight = (selectedTab) => {
  switch (selectedTab) {
    case "info":
      return { highlightedInfo: true };
    case "plan":
      return { highlightedPlan: true };
    case "addon":
      return { highlightedAddons: true };
    case "finishing":
      return { highlightedSummary: true };
    default:
      return;
  }
};

const Sidebar = ({ selectedTab }) => {
  const [highlighted, setHighlighted] = useState({
    highlightedInfo: false,
    highlightedPlan: false,
    highlightedAddons: false,
    highlightedSummary: false,
  });
  useEffect(() => {
    setHighlighted({
      ...highlighted,
      ...checkWhichTabToHighlight(selectedTab),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab]);
  return (
    <div className="main-sidebar">
      <div className="sidebar-content-wrapper">
        <SideBarContent
          highlighted={highlighted.highlightedInfo}
          step="1"
          topText="STEP 1"
          bottomText="YOUR INFO"
        />
        <SideBarContent
          highlighted={highlighted.highlightedPlan}
          step="2"
          topText="STEP 2"
          bottomText="SELECT PLAN"
        />
        <SideBarContent
          highlighted={highlighted.highlightedAddons}
          step="3"
          topText="STEP 3"
          bottomText="ADD-ONS"
        />
        <SideBarContent
          highlighted={highlighted.highlightedSummary}
          step="4"
          topText="STEP 4"
          bottomText="SUMMARY"
        />
      </div>
    </div>
  );
};

export default Sidebar;
