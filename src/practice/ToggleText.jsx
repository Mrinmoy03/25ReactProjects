import React, { useState } from 'react'

const ToggleText = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleToggle = () => {
        setIsVisible(!isVisible);
    }
  return (
    <div style={styles.container}>
        <h2>Toggle Text Visibility</h2>
        <button onClick={handleToggle}>Toggle Text</button>
        {isVisible &&  <p style={styles.paragraph}>This is the text that can be toggled.</p>}     

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
    marginBottom: '10px'
  },
  paragraph: {
    fontSize: '16px',
    color: '#333'
  }
};

export default ToggleText