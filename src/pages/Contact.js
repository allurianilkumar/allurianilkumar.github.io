// Contact.js
import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
const Contact = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Contact");   
    return (<h1> Contact:</h1>);
}

export default Contact;
