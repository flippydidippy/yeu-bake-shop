import React, { useState } from "react";
import BakeMenu from "../../BakeMenu/BakeMenu";
import PopUpWindow from "../../PopUpWindow/PopUpWindow";
import PhotoOpenOverlay from "../../PhotoOpenOverlay/PhotoOpenOverlay";

import "./index.scss";

import bakeMenuData from "../../../data/bakeMenuData/bakeMenuData";

import Buttons from "../../Buttons/Buttons";

var img;
var title;
var vegan;

const Index = () => {
    //popUp
    const [popUpOpen, setPopUpOpen] = useState(false);
    function openPopUp(i, t, v) {
        setPopUpOpen(true);
        img = i;
        title = t;
        vegan = v;
    }

    function togglePopUp() {
        setPopUpOpen(!popUpOpen);
    }

    // OVERLAY
    const [overlayOpen, setOverlayOpen] = useState(false);
    function toggleOverlay() {
        setOverlayOpen(!overlayOpen);
    }

    return (
        <section className="home-page">
            {overlayOpen && (
                <section className="overlay">
                    <PhotoOpenOverlay
                        image={img}
                        title={title}
                        open={toggleOverlay}
                    />
                </section>
            )}
            {popUpOpen && (
                <PopUpWindow
                    title={title}
                    img={img}
                    vegan={vegan}
                    togglePopUp={togglePopUp}
                    toggleOverlay={toggleOverlay}
                />
            )}
            <BakeMenu bakeMenuData={bakeMenuData} openPopUp={openPopUp} />
            <Buttons />
        </section>
    );
};

export default Index;
