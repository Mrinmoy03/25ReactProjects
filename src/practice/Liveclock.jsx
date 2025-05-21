import React, { useEffect, useState } from 'react'

const Liveclock = () => {
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [])
   
  return (
    <div style={styles.container}>
        <h2>🕒 Live Clock</h2>
        <p style={styles.clock}>{time.toLocaleTimeString()}</p>
    </div>
  )
}
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
        backgroundColor: '#f0f0f0',
    },
    clock: {
        fontSize: '2rem',
        color: '#333',
    },
}

export default Liveclock