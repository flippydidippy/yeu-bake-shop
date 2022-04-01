import React, { useState, useEffect } from "react";
import OpeningHoursComp from "../../OpeningHoursComp/OpeningHoursComp";
import Helm from "../../Helm/Helm";

import Buttons from "../../Buttons/Buttons";
import yaml from "js-yaml";

import "./opening-hours.scss";

const OpeningHours = () => {
    const [error, setError] = useState();
    // GET OPENING HOURS DATA
    const [openingHoursData, setOpeningHoursData] = useState(
        defaultOpeningHoursData
    );
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch("/data/openingHoursData.yaml");
                const rawData = await resp.text();
                const data = yaml.load(rawData);
                setOpeningHoursData(data);
            } catch (e) {
                setError(e);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Helm
                title="Opening Hours - Yeu Bake Shop"
                ogTitle="Opening Hours - Yeu Bake Shop"
                description="OPEN THURSDAY - SUNDAY THIS WEEK. Here you can find a list of our Opening Hours at Yeu Bake Shop."
                ogDescription="OPEN THURSDAY - SUNDAY THIS WEEK. Here you can find a list of our Opening Hours at Yeu Bake Shop."
                link="/opening-hours"
                ogImage
            />

            {error && "ERROR: " + error}

            <section className="opening-hours-page">
                <OpeningHoursComp openingHoursData={openingHoursData} />
                <Buttons />
            </section>
        </>
    );
};

//DEFAULT OPENING HOURS DATA
const defaultOpeningHoursData = [
    {
        regular: [
            {
                days: "",
                time: "",
            },
            {
                days: "",
                time: "",
            },
            {
                days: "",
                time: "",
            },
            {
                days: "",
                time: "",
            },
            {
                days: "",
                time: "",
            },
            {
                days: "",
                time: "",
            },
            {
                days: "",
                time: "",
            },
        ],
    },
    {
        other: [
            {
                days: "",
                time: "",
            },
            {
                days: "",
                time: "",
            },
        ],
    },
];

export default OpeningHours;
