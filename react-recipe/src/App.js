import RecipeList from "./Components/RecipeList";
import "../src/styles/app.css";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import RecipeEdit from "./Components/RecipeEdit";
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
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const [recipes, setRecipes] = useState(()=> {
    const recipeJSON = localStorage.getItem('recipes')
    if(recipeJSON!=null) {
      return JSON.parse(recipeJSON)
    }
    else{
      return sampleRecipes
    }
  });
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

  useEffect(()=> {
    localStorage.setItem('recipes', JSON.stringify(recipes))
  }, [recipes])


  const recipeContextValue = { handleRecipeAdd, handleRecipeDelete, handleRecipeSelect, handleRecipeChange};

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "",
      servings: 1,
      cooktime: "",
      instructions: "",
      ingredients: [
        {
          id: uuidv4(),
          name: "",
          amount: "",
        },
      ],
    };
    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    if(selectedRecipeId!=null && selectedRecipeId===id){
      setSelectedRecipeId(undefined)
    }
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  function handleRecipeSelect(id){
    setSelectedRecipeId(id)
  }
  function handleRecipeChange(id, recipe){
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList
        recipes={recipes}
      />
       {selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
    </RecipeContext.Provider>
  );
}

export default App;
