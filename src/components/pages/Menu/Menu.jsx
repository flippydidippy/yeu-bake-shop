import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Buttons from "../../Buttons/Buttons";
import BakeMenu from "../../BakeMenu/BakeMenu";
import Helm from "../../Helm/Helm";

import yaml from "js-yaml";

import PopUpWindow from "../../PopUpWindow/PopUpWindow";
import PhotoOpenOverlay from "../../PhotoOpenOverlay/PhotoOpenOverlay";

import bakeMenuData from "../../../data/bakeMenuData/bakeMenuData";
import menuData from "../../../data/menuData/menuData";

import shortid from "shortid";

import "./menu.scss";



var img;
var title;
var vegan;

const Menu = () => {
    //GET DATA
    useEffect(() => {
        try {
            const doc = yaml.load(fetch("./menuData.yml"));
            console.log(doc);
        } catch (e) {
            console.log(e);
        }
    }, [])


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

    //height of div
    const [height, setHeight] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        setHeight(elementRef.current.clientHeight);
    }, []); //empty dependency array so it only runs once at render





    return (
        <>
            <Helm
                title="Menu - Yeu Bake Shop"
                ogTitle="Menu - Yeu Bake Shop"
                description=""
                ogDescription=""
                link="/menu"
                ogImage
            />
            <header className="menu-title-fix">
                <div className="title-box">
                    <h1>Menu</h1>
                </div>
            </header>
            <section className="menu-page-page">
                <section
                    className="menu-page"
                    style={{
                        height:
                            window.innerWidth < 767
                                ? window.innerHeight - height - 110
                                : "unset",
                    }}
                >
                    {menuData.map((menuSet) => (
                        <div className="menu-page-box" key={shortid.generate()}>
                            <h1>{menuSet.title}</h1>
                            <div className="menu-sort">
                                {menuSet.menuSet.map((menuItem) => (
                                    <div
                                        className="menu-sort-item"
                                        key={shortid.generate()}
                                    >
                                        <div className="menu-sort-item-title">
                                            <h3>{menuItem.title}</h3>
                                            <p>{menuItem.price}</p>
                                            {menuItem.icon && (
                                                <img
                                                    src={menuItem.icon}
                                                    alt="Menu Item icon"
                                                />
                                            )}
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
                    <div className="bake-menu-page-fixed" ref={elementRef}>
                        <BakeMenu
                            bakeMenuData={bakeMenuData}
                            openPopUp={
                                window.innerWidth < 767
                                    ? openPopUp
                                    : toggleOverlayDirect
                            }
                        />
                    </div>
                </section>
                <Buttons btn2Link="/" btn2Text="Home" />
            </section>
        </>
    );
};

export default Menu;
