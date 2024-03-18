// Contact.js
import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
const About = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:About");
    return (<h1> About:</h1>);
}

export default About;
