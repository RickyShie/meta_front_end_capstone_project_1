import React from "react";
import "./Specials.css";
import Card from "./Card";


function Specials() {
    return (
        <section className="specials-grid">
            <h1 className="special-title">This week's specials!</h1>
            <Card title="Bruschetta" price="12.99" description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."></Card>
        </section>
    )
}

export default Specials;