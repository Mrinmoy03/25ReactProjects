import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] =useState(0);
    const handleClick = () => {
        setCount(count + 1);
    } 
    const handleReset = () => {
        setCount(0);
    }  
  return (
    <div style={styles.container}><h2>Click counter</h2>
     <p>You have clicked the button {count} times</p>
     <button onClick={handleClick} style={styles.button}>Click me!</button>
     <button onClick={handleReset} style={{ ...styles.button, marginLeft: '10px', backgroundColor: '#f44336', color: 'white' ,  border: 'none'}}>Reset</button>
    
    </div>
    
  )
}
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '2rem',
    fontFamily: 'Arial'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
  }
};
export default Counter