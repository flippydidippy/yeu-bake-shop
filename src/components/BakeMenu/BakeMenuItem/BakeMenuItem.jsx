import React from "react";

const BakeMenuItem = ({ img, title, vegan, openPopUp }) => {
    return (
        <li className="bake-menu-item" onClick={() => openPopUp(img, title, vegan)}>
            <img src={img} alt={title} />
            <div className="click-me" />
            <p>{title}{vegan && <> <img src="/icons/16px-Vegetarian-mark.svg.png" alt="" /></>}</p>
        </li>
    );
};

export default BakeMenuItem;

