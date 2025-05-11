import React, { useState, useEffect } from 'react';

const Greeting = () => {
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // cleanup
  }, []);

  const currentHour = time.getHours();
  let greeting = '';
  let greetingColor = '';

  if (currentHour < 12) {
    greeting = 'Good Morning';
    greetingColor = 'orange';
  } else if (currentHour < 18) {
    greeting = 'Good Afternoon';
    greetingColor = 'green';
  } else {
    greeting = 'Good Evening';
    greetingColor = 'blue';
  }

  return (
    <div style={styles.container}>
      <h1 style={{ color: greetingColor }}>{greeting} 👋</h1>
      <p style={styles.timeText}>Current time: {time.toLocaleTimeString()}</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial',
    marginTop: '2rem'
  },
  timeText: {
    fontSize: '18px',
    marginTop: '10px',
    color: '#555'
  }
};

export default Greeting;
