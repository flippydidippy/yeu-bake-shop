import React, { useState } from "react";
import { Link } from "react-router-dom";
import Buttons from "../../Buttons/Buttons";
import BakeMenu from "../../BakeMenu/BakeMenu";

import PopUpWindow from "../../PopUpWindow/PopUpWindow";
import PhotoOpenOverlay from "../../PhotoOpenOverlay/PhotoOpenOverlay";

import bakeMenuData from "../../../data/bakeMenuData/bakeMenuData";
import menuData from "../../../data/menuData/menuData";

import shortid from 'shortid';

import "./menu.scss";

var img;
var title;
var vegan;

const Menu = () => {
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
        <>
            <header className="menu-title-fix">
                <div className="title-box">
                <h1>Menu</h1>
                </div>
                
            </header>
            <section className="menu-page-page">
            
            <section className="menu-page">
                {menuData.map((menuSet) => (
                    <div className="menu-page-box" key={shortid.generate()}>
                        <h1>{menuSet.title}</h1>
                        <div className="menu-sort">
                            {menuSet.menuSet.map((menuItem) => (
                                <div className="menu-sort-item" key={shortid.generate()}>
                                    <div className="menu-sort-item-title">
                                        <h3>{menuItem.title}</h3>
                                        <p>{menuItem.price}</p>
                                        {menuItem.icon && (<img
                                            src={menuItem.icon}
                                            alt="Menu Item icon"
                                        />)}
                                    </div>
                                    <div className="menu-sort-item-desc">
                                        <p>{menuItem.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                </section>
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
                <div className="bake-menu-page-fixed">
                    <BakeMenu
                        bakeMenuData={bakeMenuData}
                        openPopUp={openPopUp}
                    />
                </div>
            </section>
                <Buttons btn2Link="/" btn2Text="Home"/>
            </section>
        </>
    );
};

export default Menu;
