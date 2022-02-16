import React from "react";
import { Link } from "react-router-dom";

import "./title-comp.scss";

import openingHoursData from "../../data/openingHoursData/openingHoursData";

var hours = new Date().getHours() + new Date().getTimezoneOffset() / 60 + 1;
var date = new Date().getDate(); //To get the Current Date
var month = new Date().getMonth() + 1; //To get the Current Month
var year = new Date().getFullYear(); //To get the Current Year

const TitleComp = ({ link }) => {
    function checkWeekDay(d, m, y) {
        var weekDay = new Date(y, m, d).getDay();

        if(weekDay === 0) {
            weekDay=6;
        } else {
            weekDay--;
        }

        return weekDay;
    }

    function getOpeningTime(day) {
        const time = openingHoursData[0].regular[day].time;
        return time.slice(0, time.indexOf("-"));
    }
    function getClosingTime(day) {
        const time = openingHoursData[0].regular[day].time;
        return time.slice(time.indexOf("-") + 1);
    }

    function getHour(time) {
        return time.slice(0, time.indexOf(":"));
    }

    function shortenTime(time) {
        if (time.slice(time.indexOf(":") + 1) === "00") return getHour(time);
        return time;
    }

    function openText() {
        if (
            hours ===
            getHour(getOpeningTime(checkWeekDay(date, month, year))) - 1
        )
            return "Opening soon";
        else if (
            hours >= getHour(getOpeningTime(checkWeekDay(date, month, year))) &&
            hours < getHour(getClosingTime(checkWeekDay(date, month, year)))
        )
            return "Open Now";

        return "Closed";
    }

    return (
        <section className="title-section">
            <div className="title-section-box">
                <div className="title">
                    <h1>Yeu Bake Shop</h1>
                </div>
                <div className="hours">
                    <div className="hours-box">
                        <p className={openText()}>{openText()}</p>
                    </div>
                    <div className="hours-box">
                        <p>
                            Today:{" "}
                            {shortenTime(
                                getOpeningTime(
                                    checkWeekDay(date, month, year)
                                )
                            ) +
                                " - " +
                                shortenTime(
                                    getClosingTime(
                                        checkWeekDay(date, month, year)
                                    )
                                )}
                        </p>
                    </div>
                </div>
                <Link className="opening-hours" to={link}>
                    <img src="/icons/icons8-xbox-menu-60.svg" alt="All opening hours icon" />
                    <p>All opening hours</p>
                </Link>
                <hr />
                <div className="left-art">
                    <svg
                        width="43"
                        height="103"
                        viewBox="0 0 43 103"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M29.2435 12.7803C25.3787 6.44202 9.97042 -5.17795 4.89368 6.66777C1.46652 14.6645 6.92804 20.8969 14.814 20.8969C15.29 20.8969 11.148 21.5032 9.90393 22.2496C7.85055 23.4817 6.1627 24.1371 4.44276 25.857C0.408978 29.8908 1.47517 40.3093 2.38856 45.4471C3.00417 48.9099 4.4161 52.7552 7.2485 54.7161C9.34567 56.168 11.6951 56.0688 14.1125 56.0688C14.6612 56.0688 19.4157 56.0688 16.8181 56.0688C5.54705 56.0688 5.79553 71.5259 5.79553 79.3164C5.79553 89.8964 19.9319 89.2134 26.7384 84.9279C31.614 81.8581 30.2182 82.1964 27.039 85.8297C25.8178 87.2254 24.7761 97.6989 25.8365 99.157C27.4445 101.368 32.7288 100.259 35.1055 100.259C38.471 100.259 39.5302 96.1023 40.9675 93.9463"
                            stroke="#34BA39"
                        />
                    </svg>
                </div>
                <div className="right-art">
                    <svg
                        width="33"
                        height="104"
                        viewBox="0 0 33 104"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 10.8784C10 6 12.8421 3.55106 19.6743 2.49994C23.103 1.97245 28.5065 8.30132 29.7951 10.8784C30.9431 13.1746 30.4965 16.0021 30.4965 18.5441C30.4965 20.15 22.7166 25.308 21.0271 25.308C19.1985 25.308 18.9448 27.3357 17.4197 28.0135C13.9406 29.5598 17.3218 29.8172 19.2735 29.8172C22.9584 29.8172 24.5038 31.4396 25.9873 34.7773C30.3591 44.6139 25.2733 50.882 14.2633 51.4615C12.397 51.5597 13.0057 51.2453 14.4637 51.6619C17.9779 52.6659 20.6236 53.3126 23.2817 55.9707C26.3434 59.0323 28.9226 63.3737 30.2961 67.4943C32.7647 74.9002 20.6336 77.615 15.616 77.615C14.0282 77.615 16.6858 78.2338 17.4197 78.9677C18.8918 80.4398 19.594 81.1381 19.6743 83.2264C19.8611 88.0821 21.8685 93.0439 19.6242 97.9065C17.704 102.067 11.888 102.071 7.95037 101.965C3.42707 101.843 1.63745 99.8405 1.63745 95.6519"
                            stroke="#50B767"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default TitleComp;
