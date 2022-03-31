import React from "react";

const BakeMenuItem = ({ img, title, vegan, openPopUp }) => {
    return (
        <li className="bake-menu-item" onClick={() => openPopUp(img, title, vegan)}>
            <img src={img} alt={title} />
            <div className="click-me" />
            <p>{title}{vegan && <> <img src="/icon/16px-Vegetarian-mark.svg.png" alt="Vegan icon" /></>}</p>
        </li>
    );
};

export default BakeMenuItem;

