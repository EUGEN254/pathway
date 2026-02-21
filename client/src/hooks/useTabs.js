// hooks/useTabs.js
import { useState, useCallback } from 'react';

const useTabs = (initialTab = 'overview') => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const setTab = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  return {
    activeTab,
    setTab,
    isActive: useCallback((tab) => activeTab === tab, [activeTab]),
  };
};

export default useTabs;