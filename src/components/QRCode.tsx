import React from 'react';
import Image from './Image';
import isNode from 'is-node';
import qrCode from 'qrcode';

function getClientQRCode(text, options = {}) {
  // For QRCode
  const canvas = document.createElement('canvas');
  qrCode.toCanvas(canvas, text, {
    margin: 4,
    ...options
  });
  const qrcode = canvas.toDataURL();
  return qrcode;
}

function getServerQRCode(text, options = {}) {
  try {
    const { createCanvas } = require('canvas');
    const canvas = createCanvas();

    qrCode.toCanvas(canvas, text, {
      margin: 4,
      ...options
    });

    const qrcode = canvas.toDataURL();
    return qrcode;
  } catch (error) {
    console.log(error.toString());
  }
}

const QRCode = ({ text, ...props }) => {
  if (isNode && !process.env.GATSBY_NODE_GLOBALS) {
    const qrcode = getServerQRCode(text);

    return <Image src={qrcode} {...props} />;
  }

  const qrcode = getClientQRCode(text);

  return <Image src={qrcode} {...props} />;
};

export default QRCode;
