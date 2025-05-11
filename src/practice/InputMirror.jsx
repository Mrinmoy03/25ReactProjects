import React, { useState } from 'react'

const InputMirror = () => {
    const [text, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value);
    }
  return (
    <div style={styles.container}>
      <h2>Input Mirror</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
        style={styles.input}
      />
      <p style={styles.mirrorText}>You typed: {text}</p>
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
    width: '60%',
    fontSize: '16px',
    marginBottom: '10px'
  },
  mirrorText: {
    fontSize: '18px',
    color: '#444'
  }
};

export default InputMirror