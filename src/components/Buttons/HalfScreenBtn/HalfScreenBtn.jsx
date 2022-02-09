import React from "react";
import './styles.scss'
import { Link } from "react-router-dom";

const HalfScreenBtn = ({ btnText, btnRectStyle, btnTextStyle, link, icon }) => {
    return (
        <Link to={link}>
            <div className="halfScreenBtn" style={btnRectStyle}>
                <h2 style={btnTextStyle}>{btnText}</h2>
                {icon && <img src={icon} alt={btnText} />}
            </div>
        </Link>
    );
};

export default HalfScreenBtn;
