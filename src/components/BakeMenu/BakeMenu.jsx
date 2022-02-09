import React from "react";
import BakeMenuItem from "./BakeMenuItem/BakeMenuItem.jsx";
import { Link } from "react-router-dom";

import "./bake-menu.scss";

const BakeMenu = ({bakeMenuData, openPopUp}) => {
    return (
        <section className="bake-menu">
            <Link className="title-box" to="/bake-menu">
                <h2>Bake Menu</h2>
                <p>(Wed-Sun)</p>
            </Link>
            <div className="bake-menu-cards">
                <ul>
                    {bakeMenuData.map((bakeMenu) => (
                        <BakeMenuItem
                            title={bakeMenu.title}
                            img={bakeMenu.img}
                            vegan={bakeMenu.vegan}
                            openPopUp={openPopUp}
                        />
                    ))}
                    
                </ul>
            </div>
        </section>
    );
};

export default BakeMenu;
