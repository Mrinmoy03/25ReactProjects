import React from 'react'

const ProfileCard = ({name, age, bio}) => {
  return (
    <div style={styles.card}>
        <h2>{name}</h2>
        <p><strong>Age:</strong> {age}</p>
        <p>{bio}</p>
    </div>
  )
}

const styles = {
    card:{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px',
        width: '300px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign:' center',
        fontFamily: 'Arial, sans-serif',
    }
}

export default ProfileCard