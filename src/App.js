import React, {  useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Nav1';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

const App = () => {
   return (
     <Router>
       <Navbar />
       <div className="container mt-4">
         <Routes>
          {routes.map((route, index) => (
             <Route key={index} path={route.path} element={route.component} />
           ))}
         </Routes>
       </div>
       <Footer />
     </Router>
   );
 };

export default App;
