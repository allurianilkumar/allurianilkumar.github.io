// Contact.js
import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Rails = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Rails");
    return (<h1> Rails:</h1>);
}

export default Rails;
