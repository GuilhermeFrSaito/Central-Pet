/* eslint-disable no-debugger */
import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { Pet } from "../Models/Types";

type CarouselProps = {
  petsData: Pet[];
};

const Carousel: React.FC<CarouselProps> = ({ petsData }) => {
  const [currentPetIndex, setCurrentPetIndex] = useState(0);

  // const goToNextPet = () => {
  //   setCurrentPetIndex((prevIndex) => (prevIndex + 1) % petsData.length);
  // };

  // const goToPreviousPet = () => {
  //   setCurrentPetIndex(
  //     (prevIndex) => (prevIndex - 1 + petsData.length) % petsData.length
  //   );
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPetIndex((prevIndex) => (prevIndex + 1) % petsData.length);
    }, 5000); // Change pet every 5 seconds

    return () => clearInterval(interval);
  }, [petsData]);

  return (
    <div className="carousel">
      <div className="carousel-container">
        {petsData.map((pet) => (
          <div
            key={pet.id}
            className={`carousel-item ${
              pet.id === petsData[currentPetIndex].id ? "active" : ""
            }`}
          >
            <h3>{pet.name}</h3>
            <img src={pet.photo} alt={pet.name} />
            <p>{pet.caracteristicasFisicas}</p>
          </div>
        ))}
      </div>
      {/* <div className="controls">
        <button onClick={goToPreviousPet}>Previous</button>
        <button onClick={goToNextPet}>Next</button>
      </div> */}
    </div>
  );
};

export default Carousel;
