import React from 'react';
import { StyleSheet } from '@react-pdf/renderer';
import Block from './Block';

const GridCell = ({
  title,
  width,
  style,
  children,
  ...props
}: {
  title?: string;
  width?: number;
  style?: any;
  children?: any;
  [key: string]: any;
}) => {
  const cellStyles = StyleSheet.create({
    cell: {
      position: 'relative',
      ...(width && { width }),
      padding: 2,
      mrginRight: 2,
      ...style
    }
  });

  return (
    <Block flex={Boolean(width) === false} style={cellStyles.cell} {...props}>
      <Block
        flex={false}
        style={{
          ...(width && { width: width - 2 })
        }}
      >
        {children}
      </Block>
    </Block>
  );
};

GridCell.defaultProps = {
  cellComponent: null,
  middle: true
};

export default GridCell;
