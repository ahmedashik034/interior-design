// src/components/Portfolio/Portfolio.jsx
import React from 'react';
import './portfolio.css'; // Importing the CSS file for the Home component

const Portfolio = () => {
  return (
    <div className="portfolio-container">
       <h2>Our Work</h2>
      <div className="portfolio-items">
        <div className="item">Project 1</div>
        <div className="item">Project 2</div>
        <div className="item">Project 3</div>
        <div className="item">Project 4</div>
      </div>
    </div>
  );
};

export default Portfolio;
