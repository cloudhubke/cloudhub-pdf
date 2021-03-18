import React from 'react';

import { PDFViewer } from '@react-pdf/renderer';

// import geomanistnormalfont from './fonts/geomanist/geomanist-regular.ttf';
// import geomanistmediumfont from './fonts/geomanist/geomanist-medium.ttf';
// import geomanistbookfont from './fonts/geomanist/geomanist-book.ttf';

// Font.register({
//   family: 'geomanist',
//   fonts: [
//     {
//       src: geomanistnormalfont,
//       fontWeight: 'normal'
//     },
//     {
//       src: geomanistmediumfont,
//       fontWeight: 'semibold'
//     },

//     {
//       src: geomanistbookfont,
//       fontWeight: 'bold'
//     }
//   ]
// });

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
