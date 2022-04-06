import React from 'react'
import './Highlights.css'

export const truncate = (num) => { 
  const text = num.toString()
  return text.length > 3 ? text.substring(0, 4) : text;
}

const SingleHighlight = ({mainText, value}) => {
  
  return (
    value  ?
    <div className="highlights--data">
        <div className="highlights--data_dot"></div>
        <div>         
          <p className="highlights--data--main">
             {mainText} {truncate(value)}%
          </p>
          <small className="highlights--data--sub">
              Average: 0,11% 
          </small>
        </div>
    </div>: null
  )
}

export default SingleHighlight;