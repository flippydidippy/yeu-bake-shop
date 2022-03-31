import React, { useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimension";

import Menu from "./Menu/Menu";
import { CSSTransition } from "react-transition-group";
import NavBarFix from "./NavBarFix/NavBarFix";

import "./navbar.scss";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    function toggleOpen() {
        setOpen(!open);
    }

    const { width } = useWindowDimensions();

    return (
        <header className="navbar">
            <div className="desktop">
                <Menu/>
            </div>
            
            
            {width < 767 && (
                <CSSTransition
                    in={open === true}
                    unmountOnExit
                    timeout={1000}
                    classNames="menu-open"
                >
                    <div className="menu-open ">
                        <Menu
                            toggleOpen={toggleOpen}
                            menuIcon={!open}
                            withTitle
                        />
                    </div>
                </CSSTransition>
            )}
            <NavBarFix 
                onClick={() => {
                    setOpen(!open);
                }}
                menuIcon={!open}
                withIcons
            />
            <div className="space" />
        </header>
    );
};

export default NavBar;
