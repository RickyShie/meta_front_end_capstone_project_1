import React from "react";
import "./Card.css";
import Button from "./Button";

function Card({title, price, description}) {
    return (
        <div className="dish-card card-grid-container">
            <img className="dish-image card-grid-item" src="/card_images/bruschetta.png"></img>
            <div className="title-price-container">
               <h4 className="dish-title">{title}</h4>
               <p className="dish-price">{`$${price}`}</p>
            </div>
            <p className="dish-description">
              The famous greek salad of crispy lettuce, peppers, 
              olives and our Chicago style feta cheese, 
              garnished with crunchy garlic and rosemary croutons. 
            </p>
            <div className="button-container">
              <Button label="Order a delivery"></Button>
            </div>
        </div>
    )
}

export default Card;