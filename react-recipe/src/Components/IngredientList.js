import React from "react";
import Ingredient from "./Ingredient";

export default function IngredientList({ ingredients }) {
  const ingredientsElement = ingredients.map((ingredient) => (
    <Ingredient key={ingredient.id} {...ingredient} />
  ));
  return <div className="ingredient-grid">{ingredientsElement}</div>;
}
