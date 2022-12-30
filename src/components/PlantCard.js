import React, {useState} from "react";

function PlantCard({plant}) {

  const [isSoldOut, setIsSoldOut] = useState(true)

  function handleClickSoldOut () {
    setIsSoldOut(!isSoldOut)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isSoldOut ? (
        <button className="primary" onClick={handleClickSoldOut}>In Stock</button>
      ) : (
        <button onClick={handleClickSoldOut}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
