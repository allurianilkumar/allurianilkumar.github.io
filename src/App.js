import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome-animation/css/font-awesome-animation.min.css'

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Resume from './pages/Resume';
import NoPage from './pages/NoPage';

import NavBar from './Navbar';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

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
          <Route path="about" element={<About />} />
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
 };

export default App;
