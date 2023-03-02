import React from 'react';
import { StyleSheet } from '@react-pdf/renderer';
import Block from './Block';

const GridCell = ({ title, width, style, children, ...props }:{
  title?: string,
  width?: number,
  style?: any,
  children?: any,
  [key: string]: any
}) => {
  const cellStyles = StyleSheet.create({
    ...(width && { minWidth: width }),
    padding: 2,
    ...style
  });

  return (
    <Block flex={!width} style={cellStyles} {...props}>
      {children}
    </Block>
  );
};

GridCell.defaultProps = {
  cellComponent: null,
  middle: true
};

export default GridCell;
