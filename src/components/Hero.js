import React from "react";
import "./Hero.css";
import Button from "./Button";


function Hero() {
    return (
        <section className="hero-grid">
            <div className="hero-grid-items hero-texts">
                <h1 className="hero-title">Little Lemon</h1>
                <h2 className="hero-subtitle">Chicago</h2>
                <p className="hero-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</p>
                <Button label="Reserve a Table"></Button>
            </div>
            <div className="hero-grid-items">
                <img className="hero-image" src="/images/restaurant_food.jpg" alt="hero"></img>
            </div>
        </section>
    )
}

export default Hero;