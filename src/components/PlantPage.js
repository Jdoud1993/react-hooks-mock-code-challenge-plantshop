import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [search, setSearch] = useState("")
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
  }, [])

  function handleAddPlant (newPlant) {
    setPlants([...plants, newPlant])
  }

  const filteredPlants = plants.filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search search={search} onSearch={setSearch}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
