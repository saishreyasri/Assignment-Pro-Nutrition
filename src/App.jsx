import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import foodsData from './resources/FoodData';

const App = () => {
  const [foods, setFoods] = useState(foodsData);
  const [filteredFoods, setFilteredFoods] = useState(foodsData);

  const handleSearch = (query) => {
    const filtered = foods.filter(food => food.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredFoods(filtered);
  };

  return (
    <div className="App">
      <h1>Pro Nutrition</h1>
      <Search onSearch={handleSearch} />
      {filteredFoods.map(food => (
        <FoodBox key={food.id} food={food} />
      ))}
    </div>
  );
};

export default App;
