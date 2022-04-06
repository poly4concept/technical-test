import React from 'react'
import Highlights from '../MainHighlight/Highlights'
import { data } from '../../Data/Data'

const Today = () => {
    const errorData = data.errors_yesterday
    const otherData = data.data[0]
    const highlightData = null
  return (
    <>
       {highlightData ? <Highlights highlightData={highlightData}/>: null }
    </>
  )
}

export default Today