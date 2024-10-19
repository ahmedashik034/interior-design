// src/components/Home/Home.jsx
import React from 'react';
import './home.css'; // Importing the CSS file for the Home component
import interiorImage from '../../image/picture1.png';

const Home = () => {
  return (
    <div className="intro-section">
    <div className="text-container">
      <h1>Interior Design</h1>
      <p>
        Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge modern innovation, allowing you to transform your living spaces into the epitome of luxury and sophistication.
      </p>
      <button className="explore-button">Explore Our Services</button> {/* Add button */}
    </div>
    <div className="image-container">
      <img src={interiorImage} alt="Interior Design" />
      
    </div>
    
  </div>
  );
};





export default Home;
