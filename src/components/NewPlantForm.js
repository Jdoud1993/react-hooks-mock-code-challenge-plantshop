import React, {useState} from "react";

function NewPlantForm({onAddPlant}) {

  const [plantName, setPlantName] = useState("");
  const [plantImage, setPlantImage] = useState("");
  const [plantPrice, setPlantPrice] = useState(Number);

  function handleSubmit(e) {
    e.preventDefault()
    const plantData = {
      name: plantName,
      image: plantImage,
      price: plantPrice
    }
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData),
    })
      .then((res) => res.json())
      .then((newPlant) => onAddPlant(newPlant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={plantName} onChange={(e) => setPlantName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" value={plantImage} onChange={(e) => setPlantImage(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={plantPrice} onChange={(e) => setPlantPrice(e.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
