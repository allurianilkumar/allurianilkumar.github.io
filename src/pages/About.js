// Contact.js
import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Profile from "../images/profile.png";

const About = () => {
  const [document_title, setDocumentTitle] = useDocumentTitle("ROR:About");
  return (
    <section className="about">
      <h3> About:</h3>

      <Container>
        <Row className="p-2">
          <Col xs lg="4">
            <Row className="justify-content-center mb-2 p-2">
              <Image
                className="profile justify-content-end"
                alt="profile"
                style={{
                  height: 250,
                  width: 250,
                }}
                src={Profile}
                thumbnail
                roundedCircle
                fluid
              />
            </Row>
          </Col>
          <Col>
            <div
              style={{
                background: "#a8a8a8ba",
                textAlign: "justify",
                textJustify: "inter-word",
              }}
              className="p-2"
            >
              <p>
                I'm a Full Stack Ruby On Rails Developer, Freelancer, Software
                Trainer. I have total 6+ years of experience on IT industry & 3+
                years of Non-IT experience with Ruby On Rails with React JS
                technologies in various domains. I have been working in software
                industry for the past 5+ years. I worked 2 years as a Software
                Trainer. I worked 1+ years as a Freelancer. Before I worked 1
                years as a Ruby on Rails Developer. I have solid fundamentals of
                programming languages, front-end, back-end, testing and
                deployment environments. I am looking forward to a new challenge
                role with my experience and passion.
              </p>

              {/* <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/allurianilkumar"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                </Col>*/}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
