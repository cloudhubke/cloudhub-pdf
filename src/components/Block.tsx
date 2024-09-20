import React from 'react';
import { View } from '@react-pdf/renderer';
import useBlockStyles from './useBlockStyles';

export interface BlockProps {
  name?: boolean;
  absolute?: boolean;
  flex?: boolean;
  row?: boolean;
  column?: boolean;
  wrap?: boolean;
  center?: boolean;
  middle?: boolean;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  margin?: number | boolean;
  padding?: number | boolean;
  elevation?: number;
  color?: string;
  space?: number;
  style?: any;
  animated?: boolean;
  paper?: boolean;
  visible?: boolean;
  opacity?: number;
}

const Block = (props: BlockProps) => {
  const { blockStyles, otherprops } = useBlockStyles(props);

  return <View style={blockStyles} {...otherprops} />;
};
export default Block;
