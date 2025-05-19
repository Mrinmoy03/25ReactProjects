import React, { useState } from 'react';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const c = e.target.value;
    setCelsius(c);

    if (c === '' || isNaN(c)) {
      setFahrenheit('');
    } else {
      setFahrenheit(((parseFloat(c) * 9) / 5 + 32).toFixed(2));
    }
  };

  const handleFahrenheitChange = (e) => {
    const f = e.target.value;
    setFahrenheit(f);

    if (f === '' || isNaN(f)) {
      setCelsius('');
    } else {
      setCelsius((((parseFloat(f) - 32) * 5) / 9).toFixed(2));
    }
  };

  const handleClear = () => {
    setCelsius('');
    setFahrenheit('');
  };

  return (
    <div style={styles.container}>
      <h2>Temperature Converter 🌡️</h2>

      <div style={styles.inputGroup}>
        <label>Celsius (°C):</label>
        <input
          type="text"
          value={celsius}
          onChange={handleCelsiusChange}
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label>Fahrenheit (°F):</label>
        <input
          type="text"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          style={styles.input}
        />
      </div>

      <button onClick={handleClear} style={styles.button}>
        Clear
      </button>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial',
    textAlign: 'center',
    marginTop: '2rem',
    padding: '0 20px',
  },
  inputGroup: {
    marginBottom: '1rem',
  },
  input: {
    marginLeft: '10px',
    padding: '8px',
    fontSize: '16px',
    width: '150px',
  },
  button: {
    padding: '8px 16px',
    fontSize: '16px',
    marginTop: '1rem',
    cursor: 'pointer',
  },
};

export default TemperatureConverter;
