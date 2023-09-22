import React from "react";
import Hamburger from "./Hamburger";
import './Header.css'

function Header() {
    return (
        <header className="header-grid">
           <Hamburger></Hamburger>
           <img className="header-logo" src="/images/logo.png"></img>
        </header>
    )
}


export default Header;