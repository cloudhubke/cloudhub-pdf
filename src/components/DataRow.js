import React from 'react';
import { StyleSheet } from '@react-pdf/renderer';
import Block from './Block';
import Text from './Text';
import { colors } from '../theme';

import GridCell from './GridCell';

const DataRow = ({ row, datarow, cellComponent, style, ...props }) => {
  const rowStyles = StyleSheet.create({
    // height: 28,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray,
    ...style
  });

  const renderRow = () =>
    datarow.map(({ key, value, width }) => {
      if (cellComponent) {
        return (
          <GridCell key={key} width={width} middle={false}>
            {cellComponent({ row, column: key })}
          </GridCell>
        );
      }

      return (
        <GridCell key={key} width={width}>
          <Text>{`${value || ''}`}</Text>
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
