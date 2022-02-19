import React, { useState, useEffect } from "react";

import BakeMenuItem from "./BakeMenuItem/BakeMenuItem.jsx";
import { Link } from "react-router-dom";
import MobileArrow from "./MobileArrow/MobileArrow.jsx";
import shortid from "shortid";

import yaml from "js-yaml"

import "./bake-menu.scss";

const BakeMenu = ({ bakeMenu, openPopUp }) => {
    const [error, setError] = useState();

    //GET DATA
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

    

    const [isVisibleArrow, setIsVisibleArrow] = useState(true);

    return (
        <section className="bake-menu">
            {error && ("ERROR: " + error)}
            <Link className="title-box" to="/bake-menu">
                <h2>Bake Menu</h2>
                <p>(Wed-Sun)</p>
            </Link>
            <div className="bake-menu-cards">
                <ul onScroll={() => setIsVisibleArrow(false)}>
                    {bakeMenuData.map((bakeMenu) => (
                        <BakeMenuItem
                            title={bakeMenu.title}
                            img={bakeMenu.img}
                            vegan={bakeMenu.vegan}
                            openPopUp={openPopUp}
                            key={shortid.generate()}
                        />
                    ))}
                </ul>
                {window.innerWidth < 767 && isVisibleArrow && <MobileArrow />}
            </div>
        </section>
    );
};

export default BakeMenu;
