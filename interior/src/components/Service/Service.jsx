// src/components/Service/Service.jsx
import React from 'react';
import './service.css'; // Importing the CSS file for the Service component

const Service = () => {
  return (
    <div className="services-container">
      <h2>Welcome to the Services Page</h2>
      <h2>Our Services</h2>
      <ul>
        <li>Web Design and Development</li>
        <li>Graphic Design</li>
        <li>Social Media Management</li>
        <li>Content Creation</li>
        <li>SEO Optimization</li>
      </ul>
    </div>
  );
};

export default Service;
