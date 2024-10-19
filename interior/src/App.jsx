// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Services" element={<Service/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Portfolio" element={<Portfolio/>} />
          {/* Other routes */}
        </Routes>
        </main>
        <Footer />
       
      </div>
    </Router>
  );
}

export default App;
