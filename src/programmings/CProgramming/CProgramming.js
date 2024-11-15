// CProgramming.js
import React from "react";

import useDocumentTitle from "../../hooks/useDocumentTitle";
import CProgrammingConcepts from "./CProgrammingConcepts";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const CProgramming = () => {
  const [document_title, setDocumentTitle] =
    useDocumentTitle("ROR:CProgramming");
  return (
    <>
      <h1> C Programming:</h1>
      <p>
        <strong>Definition:</strong> C is a general-purpose, procedural computer
        programming language supporting structured programming, lexical variable
        scope, and recursion, with a static type system. It was originally
        developed by Dennis Ritchie between 1969 and 1972 at Bell Labs.
      </p>
      <Row>
        <Col>
          <div className="">
            <Button title="Click to download Syllabus" variant="warning">
              <a
                className="button"
                href="C_Programming_Syllabus.pdf"
                download="C_Programming_Syllabus.pdf"
              >
                CP Syllabus <i className="fa fa-download" />
              </a>
            </Button>
          </div>
        </Col>
        <Col>
          <div className="">
            <Button title="Click to download CP Lab Syllabus" variant="warning">
              <a
                className="button"
                href="CP_LAB_1-B-Tech-Syllabus.pdf"
                download="CP_LAB_1-B-Tech-Syllabus.pdf"
              >
                CP Lab Syllabus <i className="fa fa-download" />
              </a>
            </Button>
          </div>
        </Col>
        <Col>
          <div className="">
            <Button title="Click to download Syllabus" variant="warning">
              <a className="button" href="C_Lab.docx" download="C_Lab.docx">
                C Lab <i className="fa fa-download" />
              </a>
            </Button>
          </div>
        </Col>
        <Col>
          <div className="">
            <Button title="Click to downlod UNIT-I" variant="warning">
              <a className="button" href="C_Unit_I.pdf" download="C_Unit_I.pdf">
                CP UNIT-I
                <i className="fa fa-download" />
              </a>
            </Button>
          </div>
        </Col>
        <Col>
          <div className="">
            <Button title="Click to downlod UNIT-II" variant="warning">
              <a className="button" href="UNIT-II.pdf" download="UNIT-II.pdf">
                CP UNIT-II
                <i className="fa fa-download" />
              </a>
            </Button>
          </div>
        </Col>
        <Col>
          <div className="">
            <Button
              title="Click to downlod UNIT-III,IV and V"
              variant="warning"
            >
              <a
                className="button"
                href="UNIT-III,IV and V.pdf"
                download="UNIT-III,IV and V.pdf"
              >
                CP UNIT-III, UNIT-IV & UNIT-V<i className="fa fa-download" />
              </a>
            </Button>
          </div>
        </Col>
      </Row>
      <CProgrammingConcepts />
    </>
  );
};

export default CProgramming;
