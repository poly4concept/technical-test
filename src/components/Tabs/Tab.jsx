import React from "react";
import './Tab.css'

const Tab = ({ id, title, activeTab, setActiveTab }) => {
 
    const handleClick = () => {
        setActiveTab(id);
    };
    
    return (
        <li onClick={handleClick} className={activeTab === id ? "tab--item tab--item_active" : "tab--item"}>
            { title }
        </li>
    );
    };
export default Tab;