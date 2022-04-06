import React from 'react'
import './Analysis.css'

const AnalysisLog = ({ percent, Heading, lastHour, Today, Yesterday, Last3Days }) => {
  return (
    <div className="analysis-log">
        <div className="analysis-log--header">
              <p className="analysis-log--title">{ Heading}</p>
              <div className={percent > 0 ? "analysis-log--percent" : 'analysis-log--percent analysis-log--percent_red'}>{percent}%</div>
        </div>
        <div className="analysis-log--item">
              <p className="analysis-log--item--value">{lastHour}</p>
            <small className="analysis-log--item--days">last Hour</small>
        </div>
        <div className="analysis-log--item">
              <p className="analysis-log--item--value">{ Today }</p>
            <small className="analysis-log--item--days">Today</small>
        </div>
        <div className="analysis-log--item">
              <p className="analysis-log--item--value analysis-log--item--opacity1">{ Yesterday }</p>
            <small className="analysis-log--item--days">Yesterday</small>
        </div>
        <div className="analysis-log--item">
              <p className="analysis-log--item--value analysis-log--item--opacity2">{ Last3Days }</p>
            <small className="analysis-log--item--days">Last 3 Days</small>
        </div>
    </div>
  )
}

export default AnalysisLog