// Contact.js
import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const JavaScript = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Javascript");   
    return (<h1> JavaScript:</h1>);
}

export default JavaScript;
