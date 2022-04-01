import React, { useState, useEffect, useRef } from "react";
import Buttons from "../../Buttons/Buttons";
import BakeMenu from "../../BakeMenu/BakeMenu";
import Helm from "../../Helm/Helm";

import PopUpWindow from "../../PopUpWindow/PopUpWindow";
import PhotoOpenOverlay from "../../PhotoOpenOverlay/PhotoOpenOverlay";
import useWindowDimensions from "../../hooks/useWindowDimension";

import shortid from "shortid";
import yaml from "js-yaml";

import "./menu.scss";

var img;
var title;
var vegan;

const Menu = () => {
    const [error, setError] = useState();
    //GET BAKE MENU
    const [bakeMenuData, setBakeMenuData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch("/data/bakeMenuData.yaml");
                const rawData = await resp.text();
                const data = yaml.load(rawData);
                setBakeMenuData(data);
            } catch (e) {
                setError(e);
            }
        };
        fetchData();
    }, []);

    //GET MENU DATA
    const [menuData, setMenuData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch("/data/menuData.yaml");
                const rawData = await resp.text();
                const data = yaml.load(rawData);
                setMenuData(data);
            } catch (e) {
                setError(e);
            }
        };
        fetchData();
    }, []);

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
    }, [bakeMenuData]); 

    //click outside of popupwindow

    //width get
    const { width } = useWindowDimensions();

    return (
        <>
            <Helm
                title="Menu - Yeu Bake Shop"
                ogTitle="Menu - Yeu Bake Shop"
                description="Milk tea, fruit ades and iced tea, coffee."
                ogDescription="Milk tea, fruit ades and iced tea, coffee."
                link="/menu"
                ogImage
            />

            <header className="menu-title-fix">
                <div className="title-box">
                    <h1>Menu</h1>
                </div>
            </header>

            {error && "ERROR: " + error}

            <section className="menu-page-page">
                <section
                    className="menu-page"
                    style={{
                        height:
                            width < 767
                                ? window.innerHeight - height - 90
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
                                        onClick={() =>
                                            menuItem.img &&
                                            (width < 767
                                                ? openPopUp(
                                                      menuItem.img,
                                                      menuItem.title,
                                                      menuItem.icon
                                                  )
                                                : toggleOverlayDirect(
                                                      menuItem.img,
                                                      menuItem.title,
                                                      menuItem.icon
                                                  ))
                                        }
                                    >
                                        <div className="menu-sort-item-container">
                                            <div className="menu-sort-item-container-title">
                                                <h3>{menuItem.title}</h3>
                                                <p>{menuItem.price}</p>
                                                {menuItem.icon && (
                                                    <img
                                                        src={menuItem.icon}
                                                        alt="Menu Item icon"
                                                    />
                                                )}
                                            </div>
                                            <div className="menu-sort-item-container-desc">
                                                <p>{menuItem.desc}</p>
                                            </div>
                                        </div>

                                        <div className="menu-sort-item-container">
                                            <div className="menu-sort-item-container-img">
                                                {menuItem.img && (
                                                    <img
                                                        src={menuItem.img}
                                                        alt={
                                                            menuItem.title +
                                                            " illustration"
                                                        }
                                                    />
                                                )}
                                            </div>
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
                            bakeMenu={bakeMenuData}
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
