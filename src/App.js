import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

import NavBar from './Navbar';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

const App = () => {
   return (
     <Router>
      <div className="container mt-4">
        <NavBar />
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Routes>
        <Footer />
      </div>
     </Router>
   );
 };

export default App;
