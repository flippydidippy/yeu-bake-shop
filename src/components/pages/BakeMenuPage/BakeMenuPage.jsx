import React, { useState } from "react";

import BakeMenu from "../../BakeMenu/BakeMenu";
import bakeMenuData from "../../../data/bakeMenuData/bakeMenuData";

import Buttons from "../../Buttons/Buttons";
import PopUpWindow from "../../PopUpWindow/PopUpWindow";
import PhotoOpenOverlay from "../../PhotoOpenOverlay/PhotoOpenOverlay";

import "./bake-menu-page.scss";

var img;
var title;
var vegan;

const BakeMenuPage = () => {
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
        <section className="bake-menu-page">
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

            <div className="bake-menu-desc">
                <p>Swipe or press the pictures to show more.</p>
                <hr />
                <h4>*The bake menu changes from week to week.</h4>
                <h4>Come visit us! {"<"}3</h4>
                <div className="img">
                    <img
                        src="/images/198058127_532161571248116_7042490020638860868_rn.jpg"
                        alt=""
                    />
                </div>
            </div>
            <Buttons />
        </section>
    );
};

export default BakeMenuPage;
