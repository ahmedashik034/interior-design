// src/components/Home/Home.jsx
import React from 'react';
import './contact.css'; // Importing the CSS file for the Home component

const Contact = () => {
  return (
    <div className="contact-container">
       <h2>Contact Us</h2>
      <p>If you have any questions or inquiries, feel free to reach out!</p>
      <form>
        <label>Name:</label>
        <input type="text" required />
        <label>Email:</label>
        <input type="email" required />
        <label>Message:</label>
        <textarea required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
