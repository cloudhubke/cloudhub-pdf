import React from 'react';
import { StyleSheet } from '@react-pdf/renderer';
import Block from './Block';

const GridCell = ({ title, width, style, children, ...props }) => {
  const cellStyles = StyleSheet.create({
    height: '100%',
    ...(width && { width }),
    ...style,
  });

  return (
    <Block flex={!width} style={cellStyles} {...props}>
      {children}
    </Block>
  );
};

GridCell.defaultProps = {
  cellComponent: null,
  middle: true,
};

export default GridCell;
