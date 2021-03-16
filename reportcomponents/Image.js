import React from 'react';
import { Image as PdfImage, StyleSheet } from '@react-pdf/renderer';

const Image = ({ style, ...props }) => {
  const imageStyles = StyleSheet.create({
    objectFit: 'contain',
    ...style,
  });

  return <PdfImage style={imageStyles} {...props} />;
};

export default Image;
