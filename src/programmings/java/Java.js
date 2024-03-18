// Contact.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Java = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Java");
    return (<h1> Java:</h1>);
}

export default Java;
