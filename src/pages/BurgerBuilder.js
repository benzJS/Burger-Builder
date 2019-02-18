import React, { Component, useContext } from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import nanoId from "nanoid";

import Burger from "../components/Burger/Burger";
import { BurgerContext } from "../contexts/BurgerContext";

const BurgerControl = React.memo(props => {
  return (
    <div>
      <p style={{ marginRight: 10 }}>{props.ingredient}</p>
      <div>
        <Button
          color="primary"
          onClick={props.lessClick.bind(this, props.ingredient)}
        >
          Less
        </Button>
        <input type="text" value={props.amount} disabled />
        <Button onClick={props.moreClick.bind(this, props.ingredient)}>
          More
        </Button>
      </div>
    </div>
  );
});

export default props => {
  const { ingredients, orderHandler, lessClick, moreClick } = useContext(
    BurgerContext
  );
  return (
    <div className="BurgerBuilder">
      <Burger ingredients={ingredients} />
      <form onSubmit={orderHandler}>
        {Object.keys(ingredients).map((igKey, id) => {
          return (
            <BurgerControl
              key={igKey + id}
              ingredient={igKey}
              amount={ingredients[igKey]}
              lessClick={lessClick}
              moreClick={moreClick}
            />
          );
        })}
        <button type="submit">Order</button>
      </form>
    </div>
  );
};
