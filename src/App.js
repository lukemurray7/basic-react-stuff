import React, { useState, useEffect } from 'react';
import './App.css';
import Recipe from "./Recipe";
import { Input, Button } from 'semantic-ui-react';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('onions, chicken, pasta');

  useEffect(() => {
    async function getRecipes () {
      console.log('???')
      const response = await fetch(`https://recipe-test11.herokuapp.com/recipes/${query}`);
      const data = await response.json();
      setRecipes(data.Recipes);
    }

    getRecipes();
  }, [query]);



  return (

    <div className="App">
    <Input icon='search' placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
    <Button content="Search" onClick={() => setQuery(search)} />

    <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', marginTop: 20 }}>
      {recipes.map(Recipes => (
          <Recipe
            Titles={Recipes.Title}
            Cuisine={Recipes.cuisine}
          />
      ))}
    </div>

    </div>
  );
};

export default App;