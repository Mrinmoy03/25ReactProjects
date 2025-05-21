import React, { useRef, useEffect } from 'react';

const AutoFocusInput = () => {
  const inputRef = useRef(null); // Step 1: create ref

  useEffect(() => {
    // Step 3: run once when component mounts
    inputRef.current.focus(); // Step 4: focus the input
  }, []);

  return (
    <div style={styles.container}>
      <h2>Auto-Focus Input Field</h2>
      <input
        type="text"
        ref={inputRef} // Step 2: attach ref to input
        placeholder="Type here..."
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '2rem',
    fontFamily: 'Arial',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '250px',
  },
};

export default AutoFocusInput;
