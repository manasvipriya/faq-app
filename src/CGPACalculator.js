import React from 'react';
import './CGPACalculator.css';

const CGPACalculator = () => {
  return (
    <div className="cgpa-calculator">
      <h2>CGPA Calculator: How to Check CGPA after Semester 2?</h2>
      <p>Calculate CGPA Formula: Total Semester Grade Point ÷ Total Credits</p>
      <p>Total Grade Point = Semester 1 + Semester 2</p>
      <p>= 208.5 + 216.5</p>
      <p>= 425</p>
      <p>Total Credit Score = Semester 1 + Semester 2</p>
      <p>= 23.0 + 24.5</p>
      <p>= 47.5</p>
      <p><strong>How to Check CGPA</strong></p>
      <p>= 425 ÷ 47.5</p>
      <p>= 8.94736</p>
      <h3>CGPA = 8.9474 at the end of Semester 2</h3>
    </div>
  );
};

export default CGPACalculator;
