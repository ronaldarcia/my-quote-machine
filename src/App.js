import React, { useState, useEffect } from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import './myCss.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  
  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
    
};

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="wrapper">

      <div className="quoteBox">

          <p className='quote'>"{quote}"</p>
          <p className='author'>- {author} -</p>

      <div className='social'>
          
          <a className='link1' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF/>
          </a>
          <a className='link2' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram/>
          </a>
          
          <button className='button' onClick={fetchQuote}>New Quote</button>
          
      </div>
            
      </div>
      
      <div className='footer'>
          <p>© 2023 by rodadev</p>
      </div>
    </div>
  );
}

export default App;