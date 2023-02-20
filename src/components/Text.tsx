// flow

import React from 'react';
import { Text as PDFText } from '@react-pdf/renderer';
import useTextStyles from './useTextStyles';

const Text = (props) => {
  const { textStyles, otherprops } = useTextStyles(props);

  return <PDFText wrap style={textStyles} {...otherprops} />;
};

export default Text;
