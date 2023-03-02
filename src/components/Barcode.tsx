import React from 'react';
import Image from './Image';
import isNode from 'is-node';
import JsBarcode from 'jsbarcode';

function getClientBarcode(text, options = {}) {
  // For Barcode
  const canvas = document.createElement('canvas');
  JsBarcode(canvas, text, {
    width: 4,
    background: 'transparent',
    displayValue: false,
    ...options
  });
  const barcode = canvas.toDataURL();
  return barcode;
}

function getServerBarcode(text, options = {}) {
  try {
    const { createCanvas } = require('canvas');
    const canvas = createCanvas();

    JsBarcode(canvas, text, {
      width: 4,
      background: 'transparent',
      displayValue: false,
      ...options
    });

    const barcode = canvas.toDataURL();
    return barcode;
  } catch (error) {
    console.log(error.toString());
  }
}

const Barcode = ({ text, ...props }) => {
  if (isNode && !process.env.GATSBY_NODE_GLOBALS) {
    const barcode = getServerBarcode(text);

    return <Image src={barcode} {...props} />;
  }

  const barcode = getClientBarcode(text);

  return <Image src={barcode} {...props} />;
};

export default Barcode;
