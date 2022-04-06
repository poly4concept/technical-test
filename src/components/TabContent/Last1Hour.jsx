import React from 'react'
import Highlights from '../MainHighlight/Highlights'
import { data } from '../../Data/Data'

const Last1Hour = () => {
    const errorData = data.errors_last_hour
    const otherData = data.data[0]
    const highlightData = [otherData.errors_last_hour, otherData.zeroes_last_hour, otherData.timeout_last_hour]
    console.log(highlightData);
  return (
    <>
      <Highlights highlightData={highlightData} />
    </>
  )
}

export default Last1Hour