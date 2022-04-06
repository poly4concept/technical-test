import React from 'react'
import AnalysisLog from './AnalysisLog'
import Pipe from '../../assets/pipe.png'
import Traffic from './Traffic'

const Analysis = ({ img, percent, Heading, lastHour, Today, Yesterday, Last3Days, Links, TrafficValue, TrafficMessage }) => {
  return (
      <div className='analysis'>
        <div className='analysis--left'>           
            <div className="analysis--side">
                <img src={img} alt="search results" className="search--icon" />
                <img src={Pipe} alt="progress pipe" className="search--icon" />  
            </div>
            <AnalysisLog percent={percent} Heading={Heading}  lastHour={lastHour} Today={Today} Yesterday={Yesterday} Last3Days={Last3Days} Links={Links} TrafficValue={TrafficValue} TrafficMessage={TrafficMessage}/>
        </div>
        <Traffic percent={percent} Links={Links} TrafficValue={TrafficValue} TrafficMessage={TrafficMessage}/>
    </div>
  )
}

export default Analysis