import React from 'react';
import { PDFViewer, Document, Font } from '@react-pdf/renderer';
import isNode from 'is-node';
import PdfThemeProvider from './theme/PdfThemeProvider';
// import wordHyphenation from './components/hyphenation';

// let geomanistnormalfont;
// let geomanistmediumfont;
// let geomanistbookfont;

// if (isNode) {
//   geomanistnormalfont = `${__dirname}/fonts/geomanist/geomanist-regular.ttf`;

//   geomanistmediumfont = `${__dirname}/fonts/geomanist/geomanist-medium.ttf`;

//   geomanistbookfont = `${__dirname}/fonts/geomanist/geomanist-book.ttf`;
// } else {
//   geomanistnormalfont = require('./fonts/geomanist/geomanist-regular.ttf')
//     .default;
//   geomanistmediumfont = require('./fonts/geomanist/geomanist-medium.ttf')
//     .default;
//   geomanistbookfont = require('./fonts/geomanist/geomanist-book.ttf').default;
// }

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

Font.registerHyphenationCallback((word) => {
  const middle = Math.floor(word.length / 2);
  const parts =
    word.length === 1
      ? [word]
      : [word.substring(0, middle), word.substring(middle)];

  // Check console to see words parts
  console.log(word, parts);

  return parts;
});

const PdfViewer = ({
  children,
  ...props
}: {
  children: any;
  fonts?: any;
  colors?: any;
  sizes?: any;
  [key: string]: any;
}) => {
  const store = {};

  if (isNode) {
    return (
      <PdfThemeProvider {...props}>
        <Document>{children}</Document>
      </PdfThemeProvider>
    );
  }
  return (
    <PdfThemeProvider {...props}>
      <PDFViewer
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >
        <Document>{children}</Document>
      </PDFViewer>
    </PdfThemeProvider>
  );
};

export default PdfViewer;
