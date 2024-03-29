import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';
import { EditorTabs } from '../config/constants';

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick,}) => {
  const snap = useSnapshot(state);

  const activeStyles = isFilterTab && isActiveTab
    ? { backgroundColor: snap.color, opacity: 0.8 }
    : { backgroundColor: 'transparent', opacity: 1 };

  return (
    <div
      key={tab.name}
      className={`tab-btn ${isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'} hover:scale-90 tooltip tooltip-success`}
      onClick={handleClick}
      style={activeStyles}
      data-tip={tab.tooltip}
     
    >
      <img
        src={tab.icon}
        alt={tab.name}
       
        loading='lazy'
        className={`${isFilterTab ? 'w-12' : 'w-11/12 h-11/12 object-contain'} `}
        
      />
    </div>
  );
};

export default Tab;
