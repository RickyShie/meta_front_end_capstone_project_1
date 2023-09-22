import React from "react";
import "./LinksList.css"

function LinksList({title, links}){
    return (
        <div className="linkslist">
            <h4 className="link-title">{title}</h4>
            <div className="links">
                {links.map((link, index) => (
                    <a key={index} href={link.href}>{link.text}</a>
                ))}
            </div>
        </div>
    )
}

export default LinksList;