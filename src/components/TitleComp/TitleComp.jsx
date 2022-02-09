import React from "react";
import { Link } from "react-router-dom";

const TitleComp = () => {
    return (
        <section className="title">
            <div className="title-box">
                <div className="title">
                    <h1>Yeu Bake Shop</h1>
                </div>
                <div className="hours">
                    <div className="hours-box">
                        <p>Open Now</p>
                    </div>
                    <div className="hours-box">
                        <p>Today: 12-18</p>
                    </div>
                </div>
                <Link className="opening-hours">
                    <p>All opening hours</p>
                </Link>
            </div>
            <hr />
        </section>
    );
};

export default TitleComp;
