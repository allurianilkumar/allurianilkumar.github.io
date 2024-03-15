// Contact.js
import React, { useState } from 'react';
import PDFViewer from './PDFViewer';
const Resume = () => { 
     
    return (
        <>
            <h1> Resume:</h1>
            <div className="PDF-viewer">
				<PDFViewer />
			</div>
        </>
        
    );
};

export default Resume;
