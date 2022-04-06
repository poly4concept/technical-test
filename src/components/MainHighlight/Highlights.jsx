import React from 'react'
import SingleHighlight from './SingleHighlight'

const Highlights = ({ highlightData }) => {
  const [errorValue, zeroValue, timeoutValue] = highlightData
  return (
    <div className='highlights'>
        <SingleHighlight mainText='Error:' value={errorValue}/>
        <SingleHighlight  mainText='Zeroes:' value={zeroValue} />
        <SingleHighlight  mainText='Timeouts:' value={timeoutValue} />
    </div>
  )
}

export default Highlights