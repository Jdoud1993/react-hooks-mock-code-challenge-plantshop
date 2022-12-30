import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const displayedPlants = plants.map((plant) => <PlantCard key={plant.id} plant={plant}/>)

  return (
    <ul className="cards">{displayedPlants}</ul>
  );
}

export default PlantList;
