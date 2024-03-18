// Contact.js
import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const MyReact = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:React");
    return (<h1> React:</h1>);

}

export default MyReact;
