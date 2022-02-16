import React from "react";
import { Link } from "react-router-dom";
import Instagram from "../../Instagram/Instagram";
import Buttons from "../../Buttons/Buttons";
import Helm from "../../Helm/Helm";

import "./contact.scss";

const Contact = () => {
    return (
        <>
            <Helm
                title="Contact - Yeu Bake Shop"
                ogTitle="Contact - Yeu Bake Shop"
                description=""
                ogDescription=""
                link="/bake-menu"
                ogImage
            />
            <section className="contact-page">
                <section className="contact">
                    <div className="contact-box">
                        <h1>Follow us on social media</h1>
                        <div className="social-media">
                            <a
                                className="social-media-col"
                                href="https://www.facebook.com/yeubakeshop"
                            >
                                <img
                                    src="/icons/icons8-facebook.svg"
                                    alt="facebook"
                                />
                                <small>@yeubakeshop</small>
                            </a>
                            <a
                                className="social-media-col"
                                href="https://www.instagram.com/yeubakeshop"
                            >
                                <img
                                    src="/icons/icons8-instagram.svg"
                                    alt="instagram "
                                />
                                <small>@yeubakeshop</small>
                            </a>
                        </div>

                        <div className="instagram">
                            <hr />
                            <Instagram></Instagram>
                            <p>Follow us on Instagram</p>
                            <hr />
                        </div>

                        <div className="desc">
                            <p>We look forward to your next visit!</p>
                            <Link className="img" to="/">
                                <img
                                    src="/icons/icons8-back-arrow-60_1.svg"
                                    alt="Go back Icon"
                                />
                            </Link>
                        </div>
                    </div>
                    <Buttons />
                </section>
            </section>
        </>
    );
};

export default Contact;
