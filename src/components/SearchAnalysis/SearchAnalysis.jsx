import React from 'react'
import { data } from '../../Data/Data'
import Analysis from '../Analysis/Analysis'
import SearchIcon from '../../assets/tunnel.png'

const SearchAnalysis = () => {
    const Heading = 'Searches'
    const lastHour = data.data[0].searches_current_last_hour
    const Today = data.data[0].searches_current_yesterday
    const Yesterday = data.data[0].searches_previous_yesterday
    const Last3Days = data.data[0].searches_current_last_3days
    const Links = 'Searches, Permissions'
    const TrafficValue = [100, 100]
    const percent = 5
    const TrafficMessage = 'You get 100% traffic on mobile and desktop devices.'
    console.log(data.data, lastHour, Today, Yesterday, Last3Days);
  return (
    <>
        <Analysis percent={percent} img={SearchIcon} Heading={Heading}  lastHour={lastHour} Today={Today} Yesterday={Yesterday} Last3Days={Last3Days} Links={Links} TrafficValue={TrafficValue} TrafficMessage={TrafficMessage}/>
    </>
  )
}

export default SearchAnalysis