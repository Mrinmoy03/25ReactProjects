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
        {isVisible && <p >This is the text that can be toggled.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id eum corporis porro ea, ipsum similique laudantium debitis temporibus voluptatem et. Reiciendis eaque obcaecati aspernatur. Rerum sint illo voluptas aperiam alias eius incidunt sequi! Ratione harum qui eum aspernatur itaque tenetur, sint ad eos consequatur temporibus provident illo inventore pariatur tempore?
          </p>}     

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