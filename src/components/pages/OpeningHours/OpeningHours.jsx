import React from 'react'
import OpeningHoursComp from '../../OpeningHoursComp/OpeningHoursComp'

import openingHoursData from '../../../data/openingHoursData/openingHoursData';
import Buttons from '../../Buttons/Buttons';

import "./opening-hours.scss";

const OpeningHours = () => {
  return (
    <section className="opening-hours-page">
        <OpeningHoursComp openingHoursData={openingHoursData}/>
        <Buttons/>
    </section>
  )
}

export default OpeningHours