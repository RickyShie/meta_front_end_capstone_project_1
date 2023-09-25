import React from "react";
import "./Card.css";
import Button from "./Button";

function Card({title, price, description, imageName}) {
    return (
        <div className="dish-card card-grid-container">
            <img className="dish-image card-grid-item" src={`/card_images/${imageName}`}></img>
            <div className="title-price-container">
               <h4 className="dish-title">{title}</h4>
               <p className="dish-price">{`$${price}`}</p>
            </div>
            <p className="dish-description">
              {description}
            </p>
            <div className="button-container">
              <Button label="Order a delivery"></Button>
            </div>
        </div>
    )
}

export default Card;