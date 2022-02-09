import React from "react";

import "./pop-up-window.scss";

const PopUpWindow = ({ title, vegan, img, togglePopUp, toggleOverlay }) => {
    return (
        <div className="pop-up-window">
            <div className="button" onClick={() => togglePopUp()}>
                <div className="button-shape">

                </div>
            </div>
            <div className="title-box">
                <h2>{title}</h2>
                {vegan && (
                    <img src="/icons/16px-Vegetarian-mark.svg.png" alt="icon" />
                )}
            </div>
            <div className="img" onClick={() => toggleOverlay()}>
                <img src={img} alt={title} />
            </div>
        </div>
    );
};

export default PopUpWindow;
