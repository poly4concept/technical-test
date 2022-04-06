import React, {useState} from 'react'
import Searches from '../components/Analysis/Analysis';
import SalesAnalysis from '../components/SalesAnalysis/SalesAnalysis';
import SearchAnalysis from '../components/SearchAnalysis/SearchAnalysis';
import ClickAnalysis from '../components/ClickAnalysis/ClickAnalysis';
import Last1Hour from '../components/TabContent/Last1Hour';
import Last3Days from '../components/TabContent/Last3Days';
import TabContent from '../components/TabContent/TabContent';
import Today from '../components/TabContent/Today';
import Yesterday from '../components/TabContent/Yesterday';
import Tab from '../components/Tabs/Tab';
import './Main.css'

const Main = () => {
    const [activeTab, setActiveTab] = useState("tab3");

    return (
        <div className="main">
            <h4 className="main--heading">Main metrics</h4>
            <ul className="tabs">
                <Tab title="Last 1 hour" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <Tab title="Today" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <Tab title="Yesterday" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <Tab title="Last 3 days" id="tab4" activeTab={activeTab} setActiveTab={setActiveTab}/>
            </ul>

            <div className="outlet">
                <TabContent id="tab1" activeTab={activeTab}>
                    <Last1Hour/>
                </TabContent>
                <TabContent id="tab2" activeTab={activeTab}>
                    <Today/>
                </TabContent>
                <TabContent id="tab3" activeTab={activeTab}>
                    <Yesterday/>
                </TabContent>
                <TabContent id="tab4" activeTab={activeTab}>
                    <Last3Days/>
                </TabContent>
            </div>
            <div className="analysis--body">
                <SearchAnalysis />
                <hr className='analysis_divider' />
                <ClickAnalysis />
                <hr className='analysis_divider' />
                <SalesAnalysis />
            </div>
        </div>
    )
}

export default Main