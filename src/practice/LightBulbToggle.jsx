import React, { useState } from 'react';

const LightBulbToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const bulbOnUrl = 'https://www.w3schools.com/js/pic_bulbon.gif';
  const bulbOffUrl = 'https://www.w3schools.com/js/pic_bulboff.gif';

  return (
    <div style={styles.container}>
      <h2>Light Bulb Toggle</h2>
      <img
        src={isOn ? bulbOnUrl : bulbOffUrl}
        alt="Light Bulb"
        style={styles.image}
      />
      <br />
      <button onClick={() => setIsOn(!isOn)} style={styles.button}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '2rem',
    fontFamily: 'Arial'
  },
  image: {
    width: '100px',
    marginBottom: '10px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
  }
};

export default LightBulbToggle;
