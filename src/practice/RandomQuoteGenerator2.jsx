import React, { useState } from 'react';
import './RandomQuoteGenerator.css'; 

const RandomQuoteGenerator2 = () => {
  const [quote, setQuote] = useState(null);
  const [fade, setFade] = useState(false);

  const handleGenerate = async () => {
    try {
      setFade(false); 
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();

     
      setTimeout(() => {
        setQuote({
          text: data.content,
          author: data.author,
        });
        setFade(true); 
      }, 100);
    } catch (error) {
      console.error('Failed to fetch quote:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Random Quote Generator 2</h2>
      <button onClick={handleGenerate} style={styles.button}>
        Generate Quote
      </button>

      {quote && (
        <div className={`quote-box ${fade ? 'fade-in' : ''}`}>
          <p style={styles.text}>"{quote.text}"</p>
          <p style={styles.author}>— {quote.author}</p>
        </div>
      )}
    </div>
  );
};

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
    marginBottom: '20px',
  },
  text: {
    fontSize: '20px',
    fontStyle: 'italic',
    color: '#444',
    marginBottom: '10px',
  },
  author: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#555',
  },
};

export default RandomQuoteGenerator2;
