import React from "react";
import { Link } from "react-router-dom";
import CtaBtn1 from "../../Buttons/CtaBtn1/CtaBtn1";

import "./find-us.scss";

const FindUs = () => {
    return (
        <section className="find-us">
            <div className="find-us-box">
                <h1>Address</h1>
                <div className="address">
                    <p>
                        <address>📍 Vikingagatan 10, Stockholm.</address>
                    </p>
                </div>
                <h1>Directions</h1>
                <div className="directions">
                    <p>Press the links below to get directions.</p>
                </div>
                <div className="buttons">
                    <div className="buttons-right">
                        <CtaBtn1
                            btnText="Google maps"
                            link="/"
                            icon="/icons/icons8-google.svg"
                            btnRectStyle={{ backgroundColor: "white" }}
                            btnTextStyle={{ color: "black" }}
                        />
                        <CtaBtn1
                            btnText="Maps"
                            link="/"
                            icon="/icons/icons8-apple-logo.svg"
                            btnRectStyle={{ backgroundColor: "white" }}
                            btnTextStyle={{ color: "black" }}
                        />
                    </div>
                    <div className="buttons-left">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1438.6265266752578!2d18.031017941674207!3d59.34087649260574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9dbfeb99700d%3A0x82b8d1f22752160a!2sYEU%20BAKE%20SHOP!5e0!3m2!1sen!2sse!4v1644527109947!5m2!1sen!2sse"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
                <div className="desc">
                    <p>We look forward to your visit!</p>
                    <Link className="img" to="/">
                        <img src="/icons/icons8-back-arrow-60_1.svg" alt="" />
                    </Link>
                </div>
                <div className="social-media">
                    <a className="social-media-col" href="e">
                        <img src="/icons/icons8-facebook.svg" alt="" />
                        <small>@yeubakeshop</small>
                    </a>
                    <a className="social-media-col" href="e">
                        <img src="/icons/icons8-instagram.svg" alt="" />
                        <small>@yeubakeshop</small>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FindUs;
