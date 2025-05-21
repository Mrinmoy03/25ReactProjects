import React, { useState, useEffect, useRef } from 'react';

const Greeting = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [formattedTime, setFormattedTime] = useState(
    formatTime(Number(localStorage.getItem('timeOnPage')) || 0)
  );

  const timerRef = useRef(Number(localStorage.getItem('timeOnPage')) || 0);


  useEffect(() => {
    const clockInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(clockInterval);
  }, []);


  useEffect(() => {
    const timerInterval = setInterval(() => {
      timerRef.current += 1;
      localStorage.setItem('timeOnPage', timerRef.current);
      setFormattedTime(formatTime(timerRef.current));
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const handleReset = () => {
    timerRef.current = 0;
    localStorage.removeItem('timeOnPage');
    setFormattedTime(formatTime(0));
  };


  const hour = currentTime.getHours();
  const greeting =
    hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';
  const greetingColor = hour < 12 ? 'orange' : hour < 18 ? 'green' : 'blue';

  return (
    <div style={styles.container}>
  
      <div style={styles.greetingContainer}>
        <h1 style={{ color: greetingColor }}>{greeting} 👋</h1>
        <p style={styles.timeText}>Current time: {currentTime.toLocaleTimeString()}</p>
      </div>

    
      <div style={styles.timerContainer}>
        <h2>⏱️ Page Timer</h2>
        <p>🕒 You've been here for: <strong>{formattedTime}</strong></p>
        <button onClick={handleReset} style={styles.button}>Reset Timer</button>
      </div>
    </div>
  );
};

// Helper Function
function formatTime(totalSeconds) {
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}


const styles = {
  container: {
      position: 'sticky',
    top: 0,
    zIndex: 10,
     backgroundColor: 'white',
  },
  greetingContainer: {
    textAlign: 'center',
    fontFamily: 'Arial',
    marginTop: '2rem',
    backgroundColor: 'white',
  },
  timeText: {
    fontSize: '18px',
    marginTop: '10px',
    color: '#555',
  },
  timerContainer: {
  
    backgroundColor: '#fff',
    textAlign: 'center',
    padding: '1rem',
    borderBottom: '1px solid #ddd',
    fontFamily: 'Arial',
  },
  button: {
    marginTop: '1rem',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Greeting;
