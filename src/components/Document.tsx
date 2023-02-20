import React from 'react';
import { Document as PdfDocument } from '@react-pdf/renderer';

// Create Document Component
const Document = ({ children, ...props }) => (
  <PdfDocument {...props}>{children}</PdfDocument>
);

Document.defaultProps = {
  title: 'Report',
  autho: 'Cloud Hub, AgriPro',
  Subject: '',
  creator: 'Cloud Hub',
  producer: 'Cloud Hub',
};

export default Document;
