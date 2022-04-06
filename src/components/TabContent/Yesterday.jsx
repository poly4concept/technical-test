import React from 'react'
import Highlights from '../MainHighlight/Highlights'
import { data } from '../../Data/Data'

const Yesterday = () => {
  const errorData = data.errors_yesterday
  const otherData = data.data[0]
  const highlightData =[ otherData.errors_yesterday, otherData.zeroes_yesterday, otherData.timeout_yesterday ]
  return (
    <>
        <Highlights highlightData={highlightData}/>
    </>
  )
}

export default Yesterday