import React, { useState } from 'react';
import Tabs from '../Tabs';
import TabContent from '../TabContent';
import './index.css';

const TechStack = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <div className="container">
      <div>
      <h1 className="formain">TECH STACK</h1>
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      <div className="content-container">
        <TabContent activeTab={activeTab} />
      </div>
    </div>
  );
};

export default TechStack;
