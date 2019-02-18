import React from "react";

import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  const { ingredients } = props;
  let transformedIngredients = Object.keys(ingredients)
    .filter(key => ingredients[key] !== 0)
    .map(igKey => {
      return [...Array(ingredients[igKey])].map((_, id) => {
        return <BurgerIngredient key={igKey.concat(id)} type={igKey} />;
      });
    });
  if (transformedIngredients.length === 0) {
    transformedIngredients = <div>Please start build your burger</div>;
  }
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
