import React, { useState } from "react";

import BakeMenu from "../../BakeMenu/BakeMenu";
import PopUpWindow from "../../PopUpWindow/PopUpWindow";
import PhotoOpenOverlay from "../../PhotoOpenOverlay/PhotoOpenOverlay";
import TitleComp from "../../TitleComp/TitleComp";
import Instagram from "../../Instagram/Instagram";
import Helm from "../../Helm/Helm";

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

    function toggleOverlayDirect(i, t, v) {
        setOverlayOpen(!overlayOpen);
        img = i;
        title = t;
        vegan = v;
    }

    return (
        <>
        <Helm
                title="Yeu Bake Shop"
                ogTitle="Yeu Bake Shop"
                description=""
                ogDescription=""
                link="/"
                ogImage
            />
        <section className="home-page">
            {overlayOpen && (
                <section className="overlay">
                    <PhotoOpenOverlay
                        image={img}
                        title={title}
                        vegan={vegan}
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
            <BakeMenu bakeMenuData={bakeMenuData} openPopUp={(window.innerWidth < 767) ? openPopUp : toggleOverlayDirect} />
            <TitleComp link="/opening-hours" />
            <div className="description">
                <div className="instagram">
                    <Instagram></Instagram>
                    <p>Follow us on Instagram</p>
                </div>
                <div className="description-desc">
                    <div className="description-desc-box">
                        <div className="icon">
                            <p>🍵</p>
                        </div>
                        <div className="text">
                            <p>Milk tea, fruit ades & iced tea, coffee.</p>
                        </div>
                    </div>
                    <div className="description-desc-box">
                        <div className="icon">
                            <p>💌</p>
                        </div>
                        <div className="text">
                            <p>
                                Woman-owned local café! BAKES & SYRUPS homemade
                                with love ❤️
                            </p>
                        </div>
                    </div>
                    <div className="description-desc-box">
                        <div className="icon">
                            <p>🌱</p>
                        </div>
                        <div className="text">
                            <p>Vegan options!</p>
                        </div>
                    </div>
                </div>
            </div>
            <Buttons />
        </section>
        </>
    );
};

export default Index;
