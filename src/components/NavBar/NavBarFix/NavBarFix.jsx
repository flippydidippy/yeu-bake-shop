import React from "react";
import { Link } from "react-router-dom";

import NavMenuBtn from "../NavMenuBtn/NavMenuBtn";

const NavBarFix = ({ onClick, menuIcon, withTitle }) => {
    return (
        <div className="navbar-fix">
            <div className="navbar-fix-box">
                <div className="icon">
                    {withTitle ? (
                        <Link to="/" onClick={onClick}>
                            <img
                                src="/images/198058127_532161571248116_7042490020638860868_n.jpg"
                                alt="Yeu Bake Shop Icon"
                            />
                        </Link>
                    ) : (
                        <Link to="/">
                            <img
                                src="/images/198058127_532161571248116_7042490020638860868_n.jpg"
                                alt="Yeu Bake Shop Icon"
                            />
                        </Link>
                    )}
                </div>
                {withTitle && (
                    <Link className="title-box" to="/" onClick={onClick}>
                        <h1>Yeu Bake Shop</h1>
                        <hr />
                    </Link>
                )}
                <nav className="menu">
                    <NavMenuBtn onClick={onClick} menuIcon={menuIcon} />
                </nav>
            </div>
        </div>
    );
};

export default NavBarFix;
