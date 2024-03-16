// Contact.js
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    subscribe: false,
  });
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget; 
    if ((formData.subscribe === false) || (form.checkValidity() === false)) {
      console.log('Form validation failed2', formData);
    } else {
      alert(JSON.stringify(formData));
      console.log('Form submitted:', formData);
    }
    setValidated(true);
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
      <h1> Register:</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
              required
              type="text"
              name="firstName"
              onChange={handleChange}
              placeholder="First name"
              defaultValue={ formData.firstName || "" }
          />
          <Form.Control.Feedback type="invalid">First Name Please</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
              type="text"
              name="lastName"
              onChange={handleChange}
            placeholder="Last name"
            defaultValue={ formData.lastName || ""}
          />
          <Form.Control.Feedback type="invalid">Last Name Please</Form.Control.Feedback>
          </Form.Group>
          </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomEmail">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              aria-describedby="inputGroupPrepend"
              required
              />
              
            <Form.Control.Feedback type="invalid">
              Please choose an Email.
            </Form.Control.Feedback>
          </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              aria-describedby="inputGroupPrepend"
              required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please choose a Password.
            </Form.Control.Feedback>
          </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomSubscribe">
          <Form.Label>Subscribe:</Form.Label>
          <InputGroup hasValidation>
            <Form.Check 
                type="switch"
                
                id="custom-switch"
                name="subscribe"
                checked={ formData.subscribe || false }
                onChange={handleChange}
                label="Subscribe"
              />
            <Form.Control.Feedback type="invalid">Please check a Subscribe.</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>       
      </Row>
      <Button type="submit">Submit form</Button>
      </Form>
    </>
  );
}

export default Register;
