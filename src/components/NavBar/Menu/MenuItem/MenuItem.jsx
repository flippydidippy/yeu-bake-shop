import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ link, title, toggleOpen, icon }) => {
    return (
        <li onClick={toggleOpen}>
            <Link to={link}>
                <h3>{title}</h3>
                <img src={icon} alt={icon} />
            </Link>
        </li>
    );
};

export default MenuItem;
