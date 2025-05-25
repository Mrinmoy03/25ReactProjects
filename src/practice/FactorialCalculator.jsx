import React, { useState, useMemo } from 'react';

const factorial = (n) => {
  console.log('Calculating factorial...');
  if (n < 0) return 0;
  if (n === 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
    
    for (let j = 0; j < 1_000_000; j++) {}
  }
  return result;
};

const FactorialCalculator = () => {
  const [number, setNumber] = useState(5);
  const [text, setText] = useState('');

  
  const result = useMemo(() => factorial(number), [number]);

  return (
    <div style={styles.container}>
      <h2>🧠 Factorial with useMemo</h2>

      <div style={styles.inputGroup}>
        <label>Enter a number: </label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          style={styles.input}
        />
      </div>

      <p>Factorial of {number} is <strong>{result}</strong></p>

      <div style={styles.inputGroup}>
        <label>Type something (no effect on factorial): </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={styles.input}
        />
      </div>
      <p>Text: {text}</p>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial',
    textAlign: 'center',
    marginTop: '2rem',
  },
  inputGroup: {
    marginBottom: '1rem',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    width: '200px',
    marginLeft: '10px',
  },
};

export default FactorialCalculator;
