import React from "react";
import "./Footer.css"
import LinksList from "./LinksList";

const doormat_links = [
    {text: "Home", href: "/"},
    {text: "About", href: "/about"},
    {text: "Menu", href: "/menu"},
    {text: "Reservatinos", href: "/reservations"},
    {text: "Order Online", href: "/order_online"},
    {text: "Login", href: "/login"}
]

const contact_links = [
    {text: "Address", href: "/address"},
    {text: "Phone Number", href: "/phone_number"},
    {text: "Email", href: "/email"}
]

const social_media_links = [
    {text: "Facebook", href: "#facebook"},
    {text: "Instagram", href: "#Instagram"}
]

function Footer(){
    return (
        <footer className="footer-grid">
            <img className="footer-logo" src="/images/footer-logo.png"></img>
            <section className="section-links">
                <LinksList title="Doormat Navigation" links={doormat_links}></LinksList>
                <LinksList title="Contact" links={contact_links}></LinksList>
                <LinksList title="Social Media Links" links={social_media_links}></LinksList>
            </section>
        </footer>
    )
}


export default Footer;