import React from "react";
import "./Specials.css";
import Card from "./Card";
import dishes from "../data";

console.log(dishes);

dishes.map(dish => {console.log(dish.description);})


function Specials() {
    return (
        <section className="specials-grid">
            <h1 className="special-title">This week's specials!</h1>
            {dishes.map(dish => {
            return <Card key={dish.id} title={dish.title} price={dish.price} description={dish.description} imageName={dish.imageName}> 
            </Card>})}
        </section>
    )
}

export default Specials;