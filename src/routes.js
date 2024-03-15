import React from 'react';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Resume from './pages/Resume';
import NoPage from './pages/NoPage';

import Ruby from './programmings/ruby/Ruby';
import Java from './programmings/java/Java';
import Python from './programmings/python/Python';
import MyReact from './programmings/react/MyReact';
import JavaScript from './programmings/javascript/JavaScript';
import Rails from './programmings/rails/Rails';

const routes = [

  { path: '/', component: <Home />, exact: true },
  { path: '/about', component: <About /> },
  { path: '/resume', component: <Resume/> },
  { path: '/login', component: <Login /> },
  { path: '/register', component: <Register /> },
  { path: '/contact', component: <Contact/> },
  { path: '/ruby', component: <Ruby /> },
  { path: '/rails', component: <Rails /> },
  { path: '/python', component: <Python /> },
  { path: '/java', component: <Java /> },
  { path: '/javascript', component: <JavaScript /> },
  { path: '/react', component: <MyReact /> },
  { path: '/*', component: <NoPage /> }
];

export default routes;