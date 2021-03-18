import React from 'react';
import { PDFViewer, Document, Font } from '@react-pdf/renderer';
import PdfThemeProvider from './theme/PdfThemeProvider';
var isNode = require('detect-node');

let geomanistnormalfont;
let geomanistmediumfont;
let geomanistbookfont;

if (isNode) {
  const path = require('path');
  geomanistnormalfont = path.join(
    __dirname,
    './assets/fonts/geomanist/geomanist-regular.ttf'
  );
  geomanistmediumfont = path.join(
    __dirname,
    './assets/fonts/geomanist/geomanist-medium.ttf'
  );
  geomanistbookfont = path.join(
    __dirname,
    './assets/fonts/geomanist/geomanist-book.ttf'
  );
} else {
  geomanistnormalfont = require('./fonts/geomanist/geomanist-regular.ttf');
  geomanistmediumfont = require('./fonts/geomanist/geomanist-medium.ttf');
  geomanistbookfont = require('./fonts/geomanist/geomanist-book.ttf');
}

Font.register({
  family: 'geomanist',
  fonts: [
    {
      src: geomanistnormalfont,
      fontWeight: 'normal'
    },
    {
      src: geomanistmediumfont,
      fontWeight: 'semibold'
    },

    {
      src: geomanistbookfont,
      fontWeight: 'bold'
    }
  ]
});

const PdfViewer = ({ children, ...props }) => {
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
