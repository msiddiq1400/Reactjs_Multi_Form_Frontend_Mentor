import React from "react";
import "./plan-card.scss";

const PlanCard = ({ selected = false, icon, text, price }) => {
  return (
    <div className={`plan-card-main ${selected ? "plan-selected" : ""}`}>
      <div>
        <img src={icon} alt="arcade" />
      </div>
      <div>
        <div className="plan-card-text">{text}</div>
        <div className="plan-card-price">{price}</div>
      </div>
    </div>
  );
};

export default PlanCard;
