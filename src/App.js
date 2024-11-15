import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "font-awesome-animation/css/font-awesome-animation.min.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Resume from "./pages/Resume";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import TelemedMD from "./pages/TelemedMD";
import A_la_Calc from "./pages/A_la_Calc";
import Jaguar from "./pages/Jaguar";
import PDS from "./pages/PDS";
import NavBar from "./Navbar";
import Footer from "./Footer";

import Ruby from "./programmings/ruby/Ruby";
import Java from "./programmings/java/Java";
import Python from "./programmings/python/Python";
import MyReact from "./programmings/react/MyReact";
import JavaScript from "./programmings/javascript/JavaScript";
import TypeScript from "./programmings/typescript/TypeScript";
import Rails from "./programmings/rails/Rails";
import MySQL from "./programmings/mysql/MySQL";
import PostgreSQL from "./programmings/postgresql/PostgreSQL";
import Bootstrap from "./programmings/bootstrap/Bootstrap";
import HTML from "./programmings/html/HTML";
import CSS from "./programmings/css/CSS";
import Github from "./programmings/github/Github";
import PHP from "./programmings/php/PHP";
import CSharp from "./programmings/CSharp/CSharp";
import JQuery from "./programmings/jquery/JQuery";
import Axios from "./programmings/axios/Axios";
import MyNodejs from "./programmings/nodejs/MyNodeJS";
import ImageFonts from "./programmings/ImagesFonts/ImagesFonts";
import JSON_XML from "./programmings/json_xml/JSON_XML";
import ManualTesting from "./programmings/manual_testing/Manual_Testing";
import SeleniumTesting from "./programmings/Selenium_testing copy/Selenium_Testing";
import RSpecTesting from "./programmings/RSpec/RSpecTesting";
import Maven from "./programmings/maven/Maven";
import TestNG from "./programmings/TestNG/TestNG";
import CProgramming from "./programmings/CProgramming/CProgramming";
import Git from "./programmings/git/Git";
import Kubernetes from "./programmings/kubernetes/Kubernetes";
import Cicd from "./programmings/CICD/Cicd";
import Docker from "./programmings/docker/Docker";
import Aws from "./programmings/aws/Aws";
import Jest from "./programmings/Jest/Jest";
import Cucumber from "./programmings/cucumber/Cucumber";
import Jasmine from "./programmings/jasmine/Jasmine";
import Maven_TestNG from "./programmings/Maven_TestNG/Maven_TestNG";
import Angular from "./programmings/angular/Angular";
import Oracle from "./programmings/oracle/Oracle";
import MondoDB from "./programmings/mongodb/MongoDB";
import MongoDB from "./programmings/mongodb/MongoDB";
import Aiml from "./programmings/aiml/Aiml";
import { getBlobFromDataTransferItem } from "@testing-library/user-event/dist/cjs/utils/index.js";
import Vacation from "./pages/Vacation";
import Landrover from "./pages/Landrover";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setIsAuthenticated(sessionStorage.getItem("isLogined"));
  }, []);
  const marqueeStyle = {
    fontWeight: "bold",
  };
  return (
    <Router>
      <div className="container mt-0">
        <marquee style={marqueeStyle}> </marquee>
        <NavBar isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ruby" element={<Ruby />} />
          <Route path="/rails" element={<Rails />} />
          <Route path="/react" element={<MyReact />} />
          <Route path="/bootstrap" element={<Bootstrap />} />
          <Route path="/JavaScript" element={<JavaScript />} />
          <Route path="/typescript" element={<TypeScript />} />
          <Route path="/mysql" element={<MySQL />} />
          <Route path="/python" element={<Python />} />
          <Route path="/java" element={<Java />} />
          <Route path="/postgresql" element={<PostgreSQL />} />
          <Route path="/html" element={<HTML />} />
          <Route path="/css" element={<CSS />} />
          <Route path="/github" element={<Github />} />
          <Route path="/php" element={<PHP />} />
          <Route path="/csharp" element={<CSharp />} />
          <Route path="/JQuery" element={<JQuery />} />
          <Route path="/axios" element={<Axios />} />
          <Route path="/nodejs" element={<MyNodejs />} />
          <Route path="/images_fonts" element={<ImageFonts />} />
          <Route path="/json_xml" element={<JSON_XML />} />
          <Route path="/manual_testing" element={<ManualTesting />} />
          <Route path="/selenium_automation" element={<SeleniumTesting />} />
          <Route path="/rspec" element={<RSpecTesting />} />
          <Route path="/maven" element={<Maven />} />
          <Route path="/TestNG" element={<TestNG />} />
          <Route path="/c" element={<CProgramming />} />
          <Route path="/git" element={<Git />} />
          <Route path="/kubernetes" element={<Kubernetes />} />
          <Route path="/cicd" element={<Cicd />} />
          <Route path="/docker" element={<Docker />} />
          <Route path="/aws" element={<Aws />} />
          <Route path="/jest" element={<Jest />} />
          <Route path="/cucumber" element={<Cucumber />} />
          <Route path="/jasmine" element={<Jasmine />} />
          <Route path="/Maven_TestNG" element={<Maven_TestNG />} />
          <Route path="/angular" element={<Angular />} />
          <Route path="/oracle" element={<Oracle />} />
          <Route path="/MongoDB" element={<MongoDB />} />
          <Route path="/AI-ML" element={<Aiml />} />
          {/* <Route path='/experience' element={<Experience/>}/> */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/telemedmd" element={<TelemedMD />} />
          <Route path="/vacation" element={<Vacation />} />
          <Route path="/A_la_Calc" element={<A_la_Calc />} />
          <Route path="/pds" element={<PDS />} />
          <Route path="/jaguar" element={<Jaguar />} />
          <Route path="/landrover" element={<Landrover />} />
          {isAuthenticated ? (
            <>
              <Route
                path="/logout"
                element={<Logout setIsAuthenticated={setIsAuthenticated} />}
              />
            </>
          ) : (
            <>
              <Route
                key="register"
                path="/register"
                element={<Register setIsAuthenticated={setIsAuthenticated} />}
              />
              <Route
                key="login"
                path="/login"
                element={<Login setIsAuthenticated={setIsAuthenticated} />}
              />
            </>
          )}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
