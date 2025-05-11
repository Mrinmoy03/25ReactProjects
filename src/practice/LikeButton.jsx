import React, { useState } from 'react'

const LikeButton = () => {
    const [liked, setLiked] = useState(false);
  const handleToggle = () => { 
    setLiked(!liked);
  }
  return (
    <div>
        <h2>Like Button Toggle</h2>
         <button onClick={handleToggle} style={styles.button}>
        {liked ? '❤️ Liked' : '🤍 Like'}
      </button>
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
    fontSize: '18px',
    padding: '10px 20px',
    cursor: 'pointer',
    border: 'none',
    background: 'none'
  }
};

export default LikeButton