import React from 'react';
import './index.css';

const Tabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="tabs-container">
      <div className="tabs">
        <button className={`tab-button ${activeTab === 'frontend' ? 'active' : ''}`} onClick={() => onTabChange('frontend')}>
          <i className="fas fa-code"></i> FRONT-END DEVELOPMENT
        </button>
        <button className={`tab-button ${activeTab === 'backend' ? 'active' : ''}`} onClick={() => onTabChange('backend')}>
          <i className="fas fa-server"></i> BACK-END DEVELOPMENT
        </button>
        <button className={`tab-button ${activeTab === 'mobile' ? 'active' : ''}`} onClick={() => onTabChange('mobile')}>
          <i className="fas fa-mobile-alt"></i> MOBILE APP DEVELOPMENT
        </button>
        <button className={`tab-button ${activeTab === 'uiux' ? 'active' : ''}`} onClick={() => onTabChange('uiux')}>
          <i className="fas fa-paint-brush"></i> UI/UX DESIGN
        </button>
      </div>
    </div>
  );
};

export default Tabs;
