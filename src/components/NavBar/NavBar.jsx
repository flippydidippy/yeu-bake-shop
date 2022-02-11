import React, { useState } from "react";
import "./navbar.scss";
import Menu from "./Menu/Menu";
import { CSSTransition } from "react-transition-group";
import NavBarFix from "./NavBarFix/NavBarFix";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    function toggleOpen() {
        setOpen(!open);
    }

    return (
        <header className="navbar">
            {window.innerWidth < 767 ? (
                <CSSTransition
                    in={open === true}
                    unmountOnExit
                    timeout={1000}
                    classNames="menu-open"
                >
                    <div className="menu-open ">
                        <Menu toggleOpen={toggleOpen} menuIcon={!open} withTitle/>
                    </div>
                </CSSTransition>
            ) : (
                // <Menu />
                <></>
            )}
            <NavBarFix
                onClick={() => {
                    setOpen(!open);
                }}
                menuIcon={!open}
            />
            <div className="space"/>
        </header>
    );
};

export default NavBar;
