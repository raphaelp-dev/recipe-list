import RecipeList from "./Components/RecipeList";

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    instructions: "1. put salt",
    cooktime: "1:45"
  },
  {
    id: 1,
    name: 'Plain Pork',
    servings: 2,
    instructions: "1. put pork",
    cooktime: "1:20"
  },
]

function App() {
  return (
    <RecipeList recipes={sampleRecipes}/>
  );
}

export default App;
