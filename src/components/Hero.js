import React from "react";
import "./Hero.css";
import Button from "./Button";


function Hero() {
    return (
        <section className="hero-grid">
            <h1 className="hero-grid-items hero-title">Little Lemon</h1>
            <h2 className="hero-grid-items hero-subtitle">Chicago</h2>
            <p className="hero-grid-items hero-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat.</p>
            <img className="hero-grid-items hero-image" src="/images/restaurant_food.jpg"></img>
            <div className="hero-grid-items reserve-button">
            <Button className="hero-grid-items reserve-button" label="Reserve a Table"></Button>
            </div>
        </section>
    )
}

export default Hero;