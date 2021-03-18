import React from 'react';

import { PDFViewer, Font } from '@react-pdf/renderer';

const PdfViewer = ({ children }) => {
  const store = {};
  return (
    <PDFViewer
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }}
    >
      {children}
    </PDFViewer>
  );
};

export default PdfViewer;
