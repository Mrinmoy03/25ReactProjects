import React from 'react';

const Child = React.memo(({ onClick }) => {
  console.log('🔁 Child rendered');
  return (
    <div style={styles.box}>
      <button onClick={onClick} style={styles.button}>
        Call Parent Function
      </button>
    </div>
  );
});

const styles = {
  box: {
    marginTop: '20px',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Child;
