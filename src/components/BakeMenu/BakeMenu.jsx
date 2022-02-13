import React, { useState } from "react";
import BakeMenuItem from "./BakeMenuItem/BakeMenuItem.jsx";
import { Link } from "react-router-dom";
import MobileArrow from "./MobileArrow/MobileArrow.jsx";
import shortid from 'shortid';

import "./bake-menu.scss";

const BakeMenu = ({ bakeMenuData, openPopUp }) => {
    const [isVisibleArrow, setIsVisibleArrow] = useState(true);

    return (
        <section className="bake-menu">
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
                {(window.innerWidth < 767 && isVisibleArrow) && <MobileArrow />}
            </div>
        </section>
    );
};

export default BakeMenu;
