/* eslint-disable no-debugger */
import React from "react";
import Carousel from "../Components/Carousel";
import petsData from "../Models/Pet"; // Assuming petsData is exported from a separate file

const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <h1>Welcome to Pet Central!</h1>
      <p>Check out our latest pets:</p>
      <div className="carousel-area">
        <Carousel petsData={petsData} />
      </div>
      {/* Add more sections or components as needed */}
    </div>
  );
};

export default MainPage;
