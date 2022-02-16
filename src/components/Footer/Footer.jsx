import React from "react";
import { Link } from "react-router-dom";

import "./footer.scss";

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-social-media">
                <div className="footer-icons">
                    <a href="https://www.instagram.com/yeubakeshop">
                        <img src="/icons/icons8-instagram.svg" alt="" />
                    </a>
                    <a href="https://www.facebook.com/yeubakeshop">
                        <img src="/icons/icons8-facebook.svg" alt="" />
                    </a>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="footer-copyright-box">
                    <p>© 2022 Yeu Bake Shop by Filip Dannevik</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;
