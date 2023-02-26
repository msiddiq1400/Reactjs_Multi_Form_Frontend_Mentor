import React, { useState } from "react";
import "./addon-component.scss";
import { Checkbox } from "@mui/material";

const AddonComponent = ({ header, desc, price }) => {
  const [check, setChecked] = useState(false);

  return (
    <div className={`addon-opt ${check ? "opt-checked" : ""}`}>
      <div className="opt-left">
        <Checkbox checked={check} onChange={() => setChecked(!check)} />
        <div className="opt-data">
          <div className="up-text">{header}</div>
          <div className="btm-text">{desc}</div>
        </div>
      </div>
      <div className="opt-price">{price}</div>
    </div>
  );
};

export default AddonComponent;
