// src/components/Footer.jsx
import React from 'react';
import './footer.css'; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Information Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@interior.com</p>
          <p>Phone: +8801714780652</p>
          <p>Address: Uttara,Dhaka,Bangladesh</p>
        </div>

        {/* Useful Links Section */}
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#contact">blogs</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#facebook" className="social-icon">Facebook</a>
            <a href="#twitter" className="social-icon">Twitter</a>
            <a href="#linkedin" className="social-icon">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Interior. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
