import React from "react";

import "./opening-hours-comp.scss";

const OpeningHoursComp = ({ openingHoursData }) => {
    return (
        <section className="opening-hours">
            <div className="opening-hours-box">
                <h1>Opening hours</h1>

                {openingHoursData[0].regular.map((hour) => (
                    <div className="main">
                        <p>{hour.days}:</p>
                        
                        <small>{hour.time}</small>
                    </div>
                ))}
                <h1>Other hours</h1>
                {openingHoursData[1].other.map((hour) => (
                    <div className="other">
                        <p>{hour.days}:</p>
                        <small>{hour.time}</small>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OpeningHoursComp;
