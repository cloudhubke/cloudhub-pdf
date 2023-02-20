import React from 'react';
import { View } from '@react-pdf/renderer';
import useBlockStyles from './useBlockStyles';

const Block = props => {
  const { blockStyles, otherprops } = useBlockStyles(props);

  return <View style={blockStyles} {...otherprops} />;
};
export default Block;
