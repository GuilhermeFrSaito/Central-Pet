import "./SidePanel.css";

const SidePanel = () => {
  return (
    <div className="side-panel">
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
