import React, {useRef, useEffect} from "react";

import "./pop-up-window.scss";

const PopUpWindow = ({ title, vegan, img, togglePopUp, toggleOverlay }) => {
    if(vegan === "true" || vegan === true) {
        vegan = (<> <img src="/icons/16px-Vegetarian-mark.svg.png" alt="Vegan icon" /></>)
    } else if (vegan != null) {
        vegan = (<> <img src={vegan} alt="icon" /></>)
    }

    let popUpWindowRef = useRef();

    useEffect(() => {
        let handler = (event) => {
            if(!popUpWindowRef.current.contains(event.target)) {
                togglePopUp();
            }
        }

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }, [])

    return (
        <div className="pop-up-window">
            <div className="button" onClick={() => togglePopUp()}>
                <div className="button-shape">

                </div>
            </div>
            <div className="title-box">
                <h2>{title}</h2>
                {vegan && (vegan)}
            </div>
            <div className="img" ref={popUpWindowRef} onClick={() => toggleOverlay()}>
                <img src={img} alt={title} />
            </div>
        </div>
    );
};

export default PopUpWindow;
