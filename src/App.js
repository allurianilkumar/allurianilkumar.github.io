import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome-animation/css/font-awesome-animation.min.css'

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Resume from './pages/Resume';
import NavBar from './Navbar';
import Footer from './Footer';

import Ruby from './programmings/ruby/Ruby';
import Java from './programmings/java/Java';
import Python from './programmings/python/Python';
import MyReact from './programmings/react/MyReact';
import JavaScript from './programmings/javascript/JavaScript';
import Rails from './programmings/rails/Rails';
import MySQL from './programmings/mysql/mysql';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setIsAuthenticated(sessionStorage.getItem('isLogined'));
  }, []);

  return (
    <Router>
      <div className="container mt-4">
        <NavBar isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/ruby" element={<Ruby />} />
          <Route path="/rails" element={<Rails />} />
          <Route path="/react" element={<MyReact />} />
          <Route path="/JavaScript" element={<JavaScript />} />
          <Route path="/mysql" element={<MySQL />} />
          <Route path="/python" element={<Python />} />
          <Route path="/java" element={<Java />} />
          {isAuthenticated ? 
            <>
              <Route path="/logout" element={<Logout setIsAuthenticated={setIsAuthenticated} />} />
            </>
          :
            <>
              <Route key="register" path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
              <Route key="login" path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            </>
          }
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
 };

export default App;
