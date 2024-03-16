// Contact.js
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import PDFViewer from './PDFViewer';
const Resume = () => { 
     
    return (
        <>
            <Container>
                <h1> Resume:</h1>
                <Row>
                    <Col>
                        <div className="row">
                            <Button title="Click to download now" variant="warning">
                                <a className="button" href="Resume.pdf" download = "AlluriAnilkumarResume.pdf">
                                    Download Resume-
                                    <i className="fa fa-download" />
                                    <i className="fa fa-asterisk fa-spin" style={{ color:"red"}}/>
                                </a>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            
            <Container>
                <Row>
                    <div className="PDF-viewer">
				        <PDFViewer />
			        </div>
                </Row>
            </Container>
            
        </>
        
    );
};

export default Resume;
