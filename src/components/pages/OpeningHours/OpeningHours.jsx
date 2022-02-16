import React from "react";
import OpeningHoursComp from "../../OpeningHoursComp/OpeningHoursComp";
import Helm from "../../Helm/Helm";

import openingHoursData from "../../../data/openingHoursData/openingHoursData";
import Buttons from "../../Buttons/Buttons";

import "./opening-hours.scss";

const OpeningHours = () => {
    return (
        <>
            <Helm
                title="Opening Hours - Yeu Bake Shop"
                ogTitle="Opening Hours - Yeu Bake Shop"
                description="Here you can find a list of our Opening Hours at Yeu Bake Shop."
                ogDescription="Here you can find a list of our Opening Hours at Yeu Bake Shop."
                link="/opening-hours"
                ogImage
            />
            <section className="opening-hours-page">
                <OpeningHoursComp openingHoursData={openingHoursData} />
                <Buttons />
            </section>
        </>
    );
};

export default OpeningHours;
