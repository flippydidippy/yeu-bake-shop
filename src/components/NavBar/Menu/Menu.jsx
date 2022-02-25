import React from "react";
import { Link } from "react-router-dom";

import MenuItem from "./MenuItem/MenuItem";
import NavBarFix from "../NavBarFix/NavBarFix";

import "./menu.scss";

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
                            icon="/icons/icons8-kawaii-bread-60.svg"
                            toggleOpen={toggleOpen}
                        ></MenuItem>
                        <MenuItem
                            title="Opening hours"
                            link="/opening-hours"
                            icon="/icons/icons8-open-sign-60.svg"
                            toggleOpen={toggleOpen}
                        ></MenuItem>
                        <MenuItem
                            title="Find us"
                            link="/find-us"
                            icon="/icons/icons8-home-address-60.svg"
                            toggleOpen={toggleOpen}
                        ></MenuItem>
                        <MenuItem
                            title="Contact"
                            link="/contact"
                            icon="/icons/icons8-communication-100.svg"
                            toggleOpen={toggleOpen}
                        ></MenuItem>
                        <MenuItem
                            title="Menu"
                            link="/menu"
                            icon="/icons/icons8-soup-plate-60.svg"
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
                        <img src="/icons/icons8-instagram.svg" alt="" />
                    </a>
                    <a href="https://www.facebook.com/yeubakeshop">
                        <img src="/icons/icons8-facebook.svg" alt="" />
                    </a>
                </div>
                {window.innerWidth > 1500 && (
                    <div className="desktop-extra-icons">
                        <img className="left-icon" src="/icons/plant_icon.jpg" alt="" />
                        <img className="right-icon" src="/icons/flowers_icon.jpg" alt="" />
                        <img className="right-right-icon" src="/icons/cheesecake_icon.jpg" alt="" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Menu;
