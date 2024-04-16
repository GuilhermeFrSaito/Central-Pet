import React from "react";
import "./Carousel.css";
import { Pet } from "../Models/Types";

type CarouselProps = {
  petsData: Pet[];
};

const Carousel: React.FC<CarouselProps> = ({ petsData }) => {
  return (
    <div className="carousel">
      <h2>Latest Pets</h2>
      <div className="carousel-container">
        {petsData.map((pet) => (
          <div key={pet.id} className="carousel-item">
            <img src={pet.photo} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p>{pet.caracteristicasFisicas}</p>
            {/* Add more pet details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
