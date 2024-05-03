import "./SidePanel.css";
import React from "react";

interface SidePanelProps {
  className?: string;
}

const SidePanel: React.FC<SidePanelProps> = ({ className }) => {
  return (
    <div className={`side-panel ${className}`}>
      <div className="dogs-report report">
        <p>We have 123 Dogs registered in our databases.</p>
      </div>
      <div className="cats-report report">
        <p>We have 123 Cats registered in our databases.</p>
      </div>
      <div className="others-report report">
        <p>We have 123 pets of other species registered in our databases.</p>
      </div>
    </div>
  );
};

export default SidePanel;
