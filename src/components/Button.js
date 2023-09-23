import React, {useState} from "react";
import './Button.css'

function Button(props) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        console.log(isClicked? 'Button clicked': 'Button unclicked');
    }

    return (
        <button className={`custom-button ${isClicked ? 'clicked' : 'normal'}`} onClick={props.onClick}>
            {props.label}
        </button>
    )
}

export default Button;