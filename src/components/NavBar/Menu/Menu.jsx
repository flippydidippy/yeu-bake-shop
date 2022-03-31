import React from "react";
import { Link } from "react-router-dom";

import MenuItem from "./MenuItem/MenuItem";
import NavBarFix from "../NavBarFix/NavBarFix";



const Menu = ({ toggleOpen, menuIcon, withTitle, withIcons }) => {
    return (
        <div className="menu-menu">
            <div className="max-width">
                <NavBarFix
                    onClick={toggleOpen}
                    menuIcon={menuIcon}
                    withTitle={withTitle}
                    withIcons={withIcons}
                />
                <div className="menu-box">
                    <ul>
                        <MenuItem
                            title="Weekly bake menu"
                            link="/bake-menu"
                            icon="/icon/icon8-kawaii-bread-60.svg"
                            toggleOpen={toggleOpen}
                        ></MenuItem>
                        <MenuItem
                            title="Opening hours"
                            link="/opening-hours"
                            icon="/icon/icon8-open-sign-60.svg"
                            toggleOpen={toggleOpen}
                        ></MenuItem>
                        <MenuItem
                            title="Find us"
                            link="/find-us"
                            icon="/icon/icon8-home-address-60.svg"
                            toggleOpen={toggleOpen}
                        ></MenuItem>
                        <MenuItem
                            title="Contact"
                            link="/contact"
                            icon="/icon/icon8-communication-100.svg"
                            toggleOpen={toggleOpen}
                        ></MenuItem>
                        <MenuItem
                            title="Menu"
                            link="/menu"
                            icon="/icon/icon8-soup-plate-60.svg"
                            toggleOpen={toggleOpen}
                        ></MenuItem>
                    </ul>
                </div>
                <div className="copyright">
                    <MenuItem
                        title="© 2022 Yeu Bake Shop by Filip Dannevik"
                        link="/"
                    ></MenuItem>
                </div>
                <div className="footer-icons">
                    <a href="https://www.instagram.com/yeubakeshop">
                        <img src="/icon/icon8-instagram.svg" alt="" />
                    </a>
                    <a href="https://www.facebook.com/yeubakeshop">
                        <img src="/icon/icon8-facebook.svg" alt="" />
                    </a>
                </div>
                {window.innerWidth > 1500 && (
                    <div className="desktop-extra-icons">
                        <img className="left-icon" src="/icon/plant_icon.jpg" alt="" />
                        <img className="right-icon" src="/icon/flowers_icon.jpg" alt="" />
                        <img className="right-right-icon" src="/icon/cheesecake_icon.jpg" alt="" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Menu;
