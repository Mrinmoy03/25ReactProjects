import React from 'react'

const SimpleCalculator = () => {
    const [num1, setNum1] = React.useState('');
    const [num2, setNum2] = React.useState('');     
    const [result, setResult] = React.useState(null);   
    const handleAddition = () => {
        setResult(parseFloat(num1) + parseFloat(num2));
    };      
    const handleSubtraction = () => {
        setResult(parseFloat(num1) - parseFloat(num2));
    };
    const handleMultiply = () => {
        setResult(parseFloat(num1) * parseFloat(num2));
    };
    const handleDivide = () => {setResult(parseFloat(num1) / parseFloat(num2))};
  return (
    <div style={styles.container}>
      <h2>Simple Calculator</h2>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={styles.input}
      />
      <div style={styles.buttonContainer}>
        <button onClick={handleAddition} style={styles.button}>Add</button>
        <button onClick={handleSubtraction} style={styles.button}>Subtract</button>
        <button onClick={handleMultiply} style={styles.button}>Multiplication</button>
        <button onClick={handleDivide} style={styles.button}>Division</button>
      </div>
      {result !== null && <p style={styles.result}>Result: {result}</p>}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '2rem',
    fontFamily: 'Arial'
  },
  input: {
    padding: '10px',
    margin: '0.5rem',
    fontSize: '16px',
    width: '200px'
  },
  buttonContainer: {
    marginTop: '1rem'
  },
  button: {
    padding: '10px 20px',
    margin: '0 10px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  result: {
    marginTop: '1rem',
    fontSize: '18px',
    color: '#333'
  }
};
export default SimpleCalculator