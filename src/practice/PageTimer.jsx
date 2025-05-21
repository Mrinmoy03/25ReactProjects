import React, { useEffect, useRef, useState } from 'react';

const PageTimer = () => {
  const timeRef = useRef(Number(localStorage.getItem('timeOnPage')) || 0);
  const [formattedTime, setFormattedTime] = useState(formatTime(timeRef.current));

  useEffect(() => {
    const interval = setInterval(() => {
      timeRef.current += 1;
      localStorage.setItem('timeOnPage', timeRef.current); 
      setFormattedTime(formatTime(timeRef.current)); 
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleReset = () => {
    timeRef.current = 0;
    localStorage.removeItem('timeOnPage');
    setFormattedTime(formatTime(0));
  };

  return (
    <div style={styles.container}>
      <h2>⏱️ Page Timer</h2>
      <p>🕒 You've been here for: <strong>{formattedTime}</strong></p>
      <button onClick={handleReset} style={styles.button}>Reset Timer</button>
    </div>
  );
};


function formatTime(totalSeconds) {
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

const styles = {
  container: {
  
    textAlign: 'center',
    marginTop: '2rem',
    fontFamily: 'Arial',
  },
  button: {
    marginTop: '1rem',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default PageTimer;
