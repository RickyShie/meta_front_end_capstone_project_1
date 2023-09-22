import React from "react";
import Hamburger from "./Hamburger";
import './Header.css'

function Header() {
    return (
        <header className="header-grid">
           <img className="header-grid-logo header-logo" src="/images/logo.png"></img>
           <div className="header-grid-hamburger">
               <Hamburger></Hamburger>
           </div>
        </header>
    )
}


export default Header;