import React from "react";
import shortid from 'shortid';

import "./opening-hours-comp.scss";


var date = new Date().getDate(); //To get the Current Date
var month = new Date().getMonth() + 1; //To get the Current Month
var year = new Date().getFullYear(); //To get the Current Year


function checkWeekDay(d, m, y) {
    var weekDay = new Date(m + " " + d + " " + y).getDay();

    if(weekDay === 0) {
        weekDay=6;
    } else {
        weekDay--;
    }

    return weekDay;
}

const OpeningHoursComp = ({ openingHoursData }) => {
    return (
        <section className="opening-hours">
            <div className="opening-hours-box">
                <h1>Opening hours</h1>

                {openingHoursData[0].regular.map((hour, index) => (
                    <div
                        className={
                            checkWeekDay(date, month, year) === index
                                ? "main today"
                                : "main"
                        }
                        key={shortid.generate()}
                    >
                        <p>{hour.days}:</p>
                        <small>{hour.time}</small>
                    </div>
                ))}
                <h1>Other hours</h1>
                {openingHoursData[1].other.map((hour) => (
                    <div className="other" key={shortid.generate()}>
                        <p>{hour.days}:</p>
                        <small>{hour.time}</small>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OpeningHoursComp;
