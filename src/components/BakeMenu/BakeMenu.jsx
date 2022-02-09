import React from "react";
import BakeMenuItem from "./BakeMenuItem/BakeMenuItem.jsx";

import "./bake-menu.scss";

const BakeMenu = ({bakeMenuData, openPopUp}) => {
    return (
        <section className="bake-menu">
            <div className="title-box">
                <h2>Bake Menu</h2>
                <p>(Wed-Sun)</p>
            </div>
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
