// Contact.js
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate  } from 'react-router-dom'; 
const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const user = sessionStorage.getItem("user") ? sessionStorage.getItem("user") : null ;
  const isLogined = sessionStorage.getItem("isLogined") ? sessionStorage.getItem("isLogined") : false;
  const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Login");
  const [formData, setFormData] = useState({
      email: '',
      password: '',
      login: false,
  });
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget; 
    if ((formData.login === false) || (form.checkValidity() === false)) {
      if (user.email === formData.email && user.password === formData.password) {
        console.log('Form validation:', formData);
        toast.error("Please check validation errors", { autoClose: 800 } );  
      }
    } else {
      alert(JSON.stringify(formData));
      toast.success("Successfully logined", { autoClose: 800 } );
      console.log('Form submitted:', formData);
      setIsAuthenticated(true);
      setValidated(true);
      navigate('/home');
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
      
      <h3> Login Form:</h3>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomEmail">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Enter email"
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
      </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomSubscribe">
          <InputGroup hasValidation>
            <Form.Check 
                required
                type="switch"
                defaultChecked={ formData.login || false }
                id="custom-switch"
                name="login"
                onChange={handleChange}
                label="Remember me"
                validated="true"
              />
            </InputGroup>
          </Form.Group>
      </Row>
      <Button type="submit">Login</Button>
      </Form>
      <ToastContainer position="top-right"/>
    </>
  );
}

export default Login;
