import React from 'react'
import { data } from '../../Data/Data'
import Analysis from '../Analysis/Analysis'
import ClickIcon from '../../assets/clicks.png'

const SearchAnalysis = () => {
    const Heading = 'Clicks'
    const lastHour = data.data[0].clicks_current_last_hour
    const Today = data.data[0].clicks_current_yesterday
    const Yesterday = data.data[0].clicks_previous_yesterday
    const Last3Days = data.data[0].clicks_current_last_3days
    const Links = 'CTR, Cliks'
    const TrafficValue = [100, 100]
    const percent = -5
    const TrafficMessage = 'Conversion from searches  to clicks on all devices.'
    console.log(data.data, lastHour, Today, Yesterday, Last3Days);
  return (
    <>
        <Analysis percent={percent} img={ClickIcon} Heading={Heading}  lastHour={lastHour} Today={Today} Yesterday={Yesterday} Last3Days={Last3Days} Links={Links} TrafficValue={TrafficValue} TrafficMessage={TrafficMessage}/>
    </>
  )
}

export default SearchAnalysis