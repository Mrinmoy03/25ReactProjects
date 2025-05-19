import React, { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div style={styles.wrapper}>
        <div style={{ ...styles.bar, width: `${progress}%` }} />
      </div>
      <div style={styles.label}>
        {Math.round(progress)}%
      </div>
    </>
  );
};

const styles = {
  wrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '5px',
    width: '100%',
    backgroundColor: '#eee',
    zIndex: 9999,
  },
  bar: {
    height: '100%',
    backgroundColor: '#3b82f6',
    transition: 'width 0.1s ease-out',
  },
  label: {
    position: 'fixed',
    top: '8px',
    right: '10px',
    backgroundColor: '#000',
    color: '#fff',
    padding: '4px 8px',
    fontSize: '12px',
    borderRadius: '4px',
    zIndex: 10000,
  },
};

export default ScrollProgressBar;
