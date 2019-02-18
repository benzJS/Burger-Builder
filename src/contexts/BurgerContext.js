import React, { useContext, useState } from "react";
import nanoId from "nanoid";

export const BurgerContext = React.createContext();
export default props => {
  const [state, setState] = useState({
    ingredients: {
      salad: 0,
      meat: 1,
      cheese: 0,
      bacon: 0
    },
    orders: []
  });
  const lessClick = ingredient => {
    console.log(ingredient);
    setState(prevState => {
      console.log(prevState);
      let ingredients = { ...prevState.ingredients };
      ingredients[ingredient]--;
      return { ingredients: ingredients };
    });
  };
  const moreClick = ingredient => {
    console.log(ingredient);
    setState(prevState => {
      let ingredients = { ...prevState.ingredients };
      ingredients[ingredient]++;
      return { ingredients: ingredients };
    });
  };
  const orderHandler = ev => {
    ev.preventDefault();
    console.log(state.orders.length);
    setState({
      orders: [
        ...state.orders,
        {
          id: nanoId(),
          ingredients: { ...state.ingredients }
        }
      ]
    });
  };
  return (
    <BurgerContext.Provider
      value={{
        ingredients: state.ingredients,
        lessClick: lessClick,
        moreClick: moreClick,
        orders: state.orders.length,
        orderHandler: orderHandler
      }}
    >
      {props.children}
    </BurgerContext.Provider>
  );
};
