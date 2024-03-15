import React, { useState } from 'react';
import PdfViewerComponent from '../components/PdfViewerComponent';

const PDFViewer = () => {
    const [document, setDocument] = useState("Resume.pdf");

    const handleOpen = () => setDocument("Resume.pdf");

    return (
      <div className="AppDocument">
        <button className="App-button" onClick={handleOpen}>
          Open another document
        </button>
        <div className="App-viewer">
          <PdfViewerComponent document={document} />
        </div>
      </div>
    );
}

export default PDFViewer;
