import React from 'react'
import OpeningHoursComp from '../../OpeningHoursComp/OpeningHoursComp'

import openingHoursData from '../../../data/openingHoursData/openingHoursData';
import Buttons from '../../Buttons/Buttons';

const OpeningHours = () => {
  return (
    <>
        <OpeningHoursComp openingHoursData={openingHoursData}/>
        <Buttons/>
    </>
  )
}

export default OpeningHours