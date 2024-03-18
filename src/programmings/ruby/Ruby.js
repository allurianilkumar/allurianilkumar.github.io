// Contact.js
import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Ruby = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Javascript");   
    return (<h1> Ruby:</h1>);
}

export default Ruby;
