import React from "react";
import './BodyComponent.css'

const BodyComponent = () => {
  return (
    <div className="body-container">
      <div className="mini-container">
      <div className="content">
        <h1>Welcome to Scout Tribe</h1>
        <p>Your journey to discover and connect with the world’s best talent starts here.</p>
        <button className="cta-btn">Join Us Now</button>
      </div>
      </div>
    </div>
  );
};

export default BodyComponent;

