import React, { useState, useCallback } from 'react';
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState(0);
  const [logCount, setLogCount] = useState(0);

  const increment = () => setCount(count + 1);


  const handleClick = useCallback(() => {
    console.log('👋 Hello from Parent! Count:', logCount);
  }, [logCount]);

  return (
    <div style={styles.container}>
      <h2>useCallback Example</h2>
      <p>Parent Count: {count}</p>
      <button onClick={increment} style={styles.button}>Increment Parent Count</button>

      <Child onClick={handleClick} />
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial',
    marginTop: '2rem',
  },
  button: {
    marginTop: '1rem',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Parent;
