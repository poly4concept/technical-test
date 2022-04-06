import React from 'react'
import { data } from '../../Data/Data'
import Analysis from '../Analysis/Analysis'
import SalesIcon from '../../assets/sales.png'


const SalesAnalysis = () => {
    const Heading = 'Sales'
    const lastHour = data.data[0].bookings_current_last_hour
    const Today = data.data[0].bookings_current_yesterday
    const Yesterday = data.data[0].bookings_previous_yesterday
    const Last3Days = data.data[0].bookings_current_last_3days
    const Links = 'STR, Bookings, Avg. Check'
    const TrafficValue = [100, 100]
    const percent = 10
    const TrafficMessage = 'Conversion from cliks  to bookings on all devices.'
    console.log(data.data, lastHour, Today, Yesterday, Last3Days);
  return (
    <>
        <Analysis percent={percent} img={SalesIcon} Heading={Heading}  lastHour={lastHour} Today={Today} Yesterday={Yesterday} Last3Days={Last3Days} Links={Links} TrafficValue={TrafficValue} TrafficMessage={TrafficMessage}/>
    </>
  )
}

export default SalesAnalysis