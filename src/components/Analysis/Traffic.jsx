import React from 'react'

const Traffic = ({ Links, percent, TrafficValue, TrafficMessage }) => {
  console.log(Links)
  return (
    <div className="traffic">
        <p className={percent > 0 ? "traffic--text" : 'traffic--text traffic--text_red'}>Mobile Traffic</p>
        <p className={percent > 0 ? "traffic--text" : 'traffic--text traffic--text_red'}>Web Traffic</p>
      <p className="traffic--message">{TrafficMessage}</p>
      <p className="traffic--help">Help:<a href="http" className="traffic--help--links"> {Links}</a> 
    </p>
    </div>
  )
}

export default Traffic