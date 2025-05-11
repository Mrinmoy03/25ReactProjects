import React, { useState } from 'react'

const DropdownSelector = () => {
    const [selectedFruit, setSelectedFruit] = useState('');
    const handleChange = (event) => {
        setSelectedFruit(event.target.value);
    };
  return (
    <div>
       <h2>Select Your Favourite Fruits</h2>
       <select value={selectedFruit} onChange={handleChange} style={styles.select}>
         <option value="">-- Choose a fruit --</option>
        <option value="Apple">🍎 Apple</option>
        <option value="Banana">🍌 Banana</option>
        <option value="Orange">🍊 Orange</option>
        <option value="Grapes">🍇 Grapes</option>
        <option value="Mango">🥭 Mango</option>
       </select>
       
         {selectedFruit && (
           <p style={styles.result}>You selected: <strong>{selectedFruit}</strong></p>
         )}
    </div>
  )
}
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '2rem',
    fontFamily: 'Arial',
  },
  select: {
    padding: '10px',
    fontSize: '16px',
    width: '200px',
    marginTop: '10px',
  },
  result: {
    marginTop: '1rem',
    fontSize: '18px',
  },
};


export default DropdownSelector