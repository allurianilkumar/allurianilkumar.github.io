// TelemedMD.js
import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const TelemedMD = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:TelemedMD");
    return (
        <section className='TelemedMD'>
            <h3> TelemedMD:</h3>
            
            <Container>
                <Row className="p-2">
                    
                    <Col xs lg="4">
                    <Row className="justify-content-center mb-2 p-2">
                    
                    <Image
                    className="telemedmd justify-content-end"
                    alt="telemedmd"
                    style={{
                        height: 250,
                        width: 250
                      }}                    
                    src='telemedmd.jpg'
                    roundedCircle
                    fluid
                    />
                    
                    </Row>
              </Col>
              <Col>
                    <div  style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">
                    <p>
                    <b>Project#1: TelemedMD (Feb 2020 - Present )<br/></b>
                      Telemed MD is a nationwide virtual platform providing medical care through virtual  clinics an online Telehealth support. Every Patients can connect with doctors via online. Patients can have video sessions with doctors and can use their insurance to cover the expenses of doctor visit and diagnosis fee. The diagnosis report will be sent to the patient both by Images and as PDF.
                      <br/><b>Environment:</b> Ruby, Ruby On Rails, Sidekiq, Whenever, React
                      Js, JavaScript, Bootstrap, HTML & CSS, Carrierwave, PDFKit,
                      PostgreSQL, RSpec, Cucumber & Selenium, Docker,
                      Kubernetes,Helm.
                      <br/><b>Roles & Responsibilities:</b>
                      <ul>
                        <li>Developed user-friendly web components using React Js,
                        JavaScript, Bootstrap, HTML & CSS, Ruby On Rails, Sidekiq,
                        Whenever, Carrierwave, PDFKit, PostgreSQL, RSpec, Cucumber
                        & Selenium, Docker, Kubernetes, Helm for Telemed MD, a
                        nationwide virtual platform offering medical care through
                        virtual clinics.</li>
                        <li>Implemented responsive and efficient server-side logic and
                        APIs to enhance the user experience.</li>
                        <li>Identified and fixed bugs by rigorous testing, improving
                        front-end and back-end performance.</li>
                        <li>Contributed actively to agile development processes and
                        sprint planning for efficient project delivery</li>
                        <li>Engaged in writing comprehensive unit tests and
                        participating in valuable code reviews to ensure high code
                        quality and project success.</li>
                      </ul>
                    </p>
                    </div>
                   </Col> 
                </Row>
            </Container>
        </section>

        
    );
}

export default TelemedMD;
