import React from 'react'
import OpeningHoursComp from '../../OpeningHoursComp/OpeningHoursComp'

import openingHoursData from '../../../data/openingHoursData/openingHoursData';

const OpeningHours = () => {
  return (
    <>
        <OpeningHoursComp openingHoursData={openingHoursData}/>
    </>
  )
}

export default OpeningHours