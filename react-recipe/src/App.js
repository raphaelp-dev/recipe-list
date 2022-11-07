import RecipeList from "./Components/RecipeList";
import "../src/styles/app.css";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import React from "react";
const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    instructions: "1. put salt",
    cooktime: "1:45",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 pounds",
      },
      {
        id: 2,
        name: "salt",
        amount: "3 pounds",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 2,
    instructions: "1. put pork",
    cooktime: "1:20",
    ingredients: [
      {
        id: 1,
        name: "potk",
        amount: "3 pounds",
      },
      {
        id: 2,
        name: "salt",
        amount: "2 pounds",
      },
    ],
  },
];

export const RecipeContext = React.createContext();

function App() {
  const [recipes, setRecipes] = useState(()=> {
    const recipeJSON = localStorage.getItem('recipes')
    if(recipeJSON!=null) {
      return JSON.parse(recipeJSON)
    }
    else{
      return sampleRecipes
    }
  });

  useEffect(()=> {
    localStorage.setItem('recipes', JSON.stringify(recipes))
  }, [recipes])


  const recipeContextValue = { handleRecipeAdd, handleRecipeDelete };

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "new",
      servings: 1,
      cooktime: "1:00",
      instructions: "instruc",
      ingredients: [
        {
          id: uuidv4(),
          name: "name",
          amount: "1 tbs",
        },
      ],
    };
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList
        recipes={recipes}
      />
    </RecipeContext.Provider>
  );
}

export default App;
