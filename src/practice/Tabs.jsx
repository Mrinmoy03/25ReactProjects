import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [profileData, setProfileData] = useState(null);


  useEffect(() => {
    if (activeTab === 'Profile' && !profileData) {
      setTimeout(() => {
        setProfileData({
          name: 'John Doe',
          email: 'john@example.com',
        });
      }, 1000); 
    }
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <p>🏠 Welcome to the Home tab!</p>;
      case 'Profile':
        return profileData ? (
          <div>
            <p>👤 Name: {profileData.name}</p>
            <p>📧 Email: {profileData.email}</p>
          </div>
        ) : (
          <p>Loading profile...</p>
        );
      case 'Settings':
        return <p>⚙️ Adjust your Settings here.</p>;
      default:
        return null;
    }
  };

  const tabs = [
    { label: 'Home', icon: <FaHome /> },
    { label: 'Profile', icon: <FaUser /> },
    { label: 'Settings', icon: <FaCog /> },
  ];

  return (
    <div style={styles.container}>
      <h2>✨ Tabs Component</h2>
      <div style={styles.tabContainer}>
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            style={{
              ...styles.tab,
              backgroundColor: activeTab === tab.label ? '#007bff' : '#f0f0f0',
              color: activeTab === tab.label ? '#fff' : '#000',
            }}
          >
            <span style={{ marginRight: 8 }}>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          style={styles.content}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial',
    textAlign: 'center',
    marginTop: '2rem',
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '1rem',
  },
  tab: {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    fontSize: '18px',
    marginTop: '1rem',
    minHeight: '100px',
  },
};

export default Tabs;
