import React from 'react'
import Highlights from '../MainHighlight/Highlights'
import { data } from '../../Data/Data'

const Last3Days = () => {
    const otherData = data.data[0]
    const highlightData =[ otherData.errors_last_3days, otherData.zeroes_last_3days, otherData.timeout_last_3days ]
  return (
    <>
        <Highlights highlightData={highlightData}/>
    </>
  )
}

export default Last3Days;