import { p } from 'framer-motion/client';
import React, { useState } from 'react'

const RandomQuoteGenerator = () => {
      const quotes = [
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Be yourself; everyone else is already taken. – Oscar Wilde",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  ];
  const [quote, setQuote] = useState('');
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };
  return (
    <div style={styles.container}>
        <h2>Random Quote Generator</h2>
        <button onClick={handleClick} style={styles.button}>Generate Quote</button>
        {quote && (
          <p style={styles.quote}>
            {quote}
          </p>
        )}
            
        
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial',
    marginTop: '2rem',
    padding: '0 20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  quote: {
    marginTop: '20px',
    fontSize: '18px',
    fontStyle: 'italic',
    color: '#444',
  },
};

export default RandomQuoteGenerator