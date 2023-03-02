import React from 'react';
import { StyleSheet } from '@react-pdf/renderer';
import Block from './Block';
import Text from './Text';
import { colors } from '../theme';

import GridCell from './GridCell';

const DataRow = ({
  row,
  datarow,
  cellComponent,
  style,
  ...props
}: {
  key?: string;
  row?: any;
  datarow?: Array<{
    key: string;
    value: any;
    width?: number;
    render?: (params: {
      row?: any;
      Text?: React.ReactNode;
      Block?: React.ReactNode;
    }) => React.ReactElement;
  }>;
  cellComponent?: (params: {
    column: string;
    row: any;
    render?: (params: {
      row?: any;
      Text?: React.ReactNode;
      Block?: React.ReactNode;
    }) => React.ReactElement;
  }) => React.ReactElement;
  style?: any;
}) => {
  const rowStyles = StyleSheet.create({
    // height: 28,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray,
    ...style
  });

  const renderRow = () =>
    datarow.map(({ key, value, width, render }) => {
      if (cellComponent) {
        return (
          <GridCell key={key} width={width} middle={false}>
            {cellComponent({ row, column: key, render })}
          </GridCell>
        );
      }

      return (
        <GridCell key={key} width={width}>
          {typeof render === 'function' ? (
            render({ row, Text, Block })
          ) : (
            <Text wrap>{`${value || ''}`}</Text>
          )}
        </GridCell>
      );
    });

  return (
    <Block flex={false} row middle style={rowStyles} wrap={false} {...props}>
      {renderRow()}
    </Block>
  );
};

DataRow.defaultProps = {
  row: []
};

export default DataRow;
