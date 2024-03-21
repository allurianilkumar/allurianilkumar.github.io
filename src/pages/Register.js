// Contact.js
import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import useDocumentTitle from '../hooks/useDocumentTitle';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';


const Register = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const user = sessionStorage.getItem("user") ? sessionStorage.getItem("user") : null;
  const [document_title, setDoucmentTitle] = useDocumentTitle("ROR:Registration");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confimPassword: '',
    subscribe: false,
  });
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget; 
    if ((formData.subscribe === false) || (form.checkValidity() === false)) {
      console.log('Form validation failed2', formData);
      toast.error("Please check validation errors", { autoClose: 800 } );
    } else {
      console.log(JSON.stringify(formData));
      try {
        const url = 'http://localhost:8000/users';
	      const data = JSON.stringify(formData);
	      //const config = { 'content-type': 'application/json' };
        // const response = await axios.post(url, data, config);
        // console.log("Axios Response: ", response);
        sessionStorage.setItem('user', data);
        toast.success("Successfully Registered", { autoClose: 800 });
        console.log('Form submitted:', formData);
        setValidated(true);
        navigate('/login');
      } catch (error) {
        console.log("Axios Error: ",error);
      }
    }
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
 
  
  return(
    <>
    
      <h3> Registration Form:</h3>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
              required
              type="text"
              name="firstName"
              onChange={handleChange}
              placeholder="Enter first name"
              defaultValue={ formData.firstName || "" }
          />
          <Form.Control.Feedback type="invalid">Please select first name</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
             <InputGroup hasValidation>
          <Form.Control
            required
              type="text"
                name="lastName"
              onChange={handleChange}
                placeholder="Enter last name"
              value={ formData.lastName || ""}
          />
              <Form.Control.Feedback type="invalid">Please select last name</Form.Control.Feedback>
              </InputGroup>
          </Form.Group>
          </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomEmail">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Enter an email"
              name="email"
              onChange={handleChange}
              aria-describedby="inputGroupPrepend"
              isInvalid= { validated && !/^\S+@\S+\.\S+$/.test(formData.email) }
              required
            />
              
            <Form.Control.Feedback type="invalid">
              Please choose an Email.
            </Form.Control.Feedback>
          </InputGroup>
          </Form.Group>
            <Form.Group as={Col} md="4" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
              type="text"
              placeholder="Enter username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    pattern="^[a-zA-Z0-9]+$"
                    required
                    isInvalid={ validated && !/^[a-zA-Z0-9]+$/.test(formData.username) }
                />
                <Form.Control.Feedback type="invalid">
                    Please enter a valid username (alphanumeric
                    characters only).
                </Form.Control.Feedback>
            </Form.Group>
          
        </Row>
                            
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="password"
                placeholder="Enter password"
                name="password"
                minLength={6}
                onChange={handleChange}
                isInvalid={validated && formData.password.length < 6}
              aria-describedby="inputGroupPrepend"
              required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Password must be at least 6 characters long.
              </Form.Control.Feedback>
          </InputGroup>
          </Form.Group>
        <Form.Group  as={Col} md="4" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter confirm password"
                name="confimPassword"
                value={formData.confimPassword}
                onChange={handleChange}
                minLength={6}
                required
                pattern={formData.password}
                isInvalid={
                    validated &&
                    formData.confimPassword !== formData.password
                }
            />
            <Form.Control.Feedback type="invalid">
                Passwords do not match.
            </Form.Control.Feedback>
        </Form.Group>      
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomSubscribe">
          <Form.Label>Subscribe:</Form.Label>
          <InputGroup hasValidation>
            <Form.Check 
                required
                type="switch"
                defaultChecked={ formData.subscribe || false }
                id="custom-switch"
                name="subscribe"
                onChange={handleChange}
                label="I accept the Terms and Conditions"
                validated="true"
              />
            </InputGroup>
          </Form.Group>
      </Row>
      <Button type="submit">Register</Button>
      </Form>
      <ToastContainer position="top-right"/>
    </>
  );
}

export default Register;
