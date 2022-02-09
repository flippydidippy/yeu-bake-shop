import React from "react";

import "./opening-hours-comp.scss"

const OpeningHoursComp = () => {
    return (
        <section className="opening-hours">
            <div className="opening-hours-box">
                <h1>Opening hours</h1>
                <div className="main">
                    
                    <p>Monday-Friday:</p>
                    <small>12:00-18:00</small>
                </div>
                <h1>Other hours</h1>
                <div className="other">
                    <p>Monday-Friday:</p>
                    <small>12:00-18:00</small>
                </div>
            </div>
        </section>
    );
};

export default OpeningHoursComp;
