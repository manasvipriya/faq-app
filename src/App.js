// src/App.js
import React from 'react';
import FAQ from './FAQ';
import FAQData from './FAQData';
import CGPACalculator from './CGPACalculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <CGPACalculator />
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {FAQData.map((faq, index) => (
          <FAQ key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default App;
