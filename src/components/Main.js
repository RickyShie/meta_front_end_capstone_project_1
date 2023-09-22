import React from "react";
import "./Main.css"
import Hero from "./Hero";
import Specials from "./Specials";

function Main(){
    return (
        <main className="main-content">
            <Hero></Hero>
            <Specials></Specials>
        </main>
    )
}

export default Main;