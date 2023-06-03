import React from 'react';
import { StyleSheet } from '@react-pdf/renderer';
import Block from './Block';
import Text from './Text';
import { colors, sizes } from '../theme';

import GridCell from './GridCell';

const SummaryRow = ({
  columns,
  data,
  summary,
  summaryRowComponent,
  style,
  ...props
}: {
  data: Array<any>;
  columns: Array<{
    name: string;
    title: string;
    width?: number;
    render?: (params: {
      row?: any;
      Text?: React.ReactNode;
    }) => React.ReactElement;
  }>;
  summary: {
    [key: string]: (params: {
      data?: Array<any>;
      Text?: any;
      Block?: any;
    }) => any;
  };
  summaryRowComponent?: (params: {
    data?: Array<any>;
    Text?: React.ReactNode;
    Block?: React.ReactNode;
  }) => any;
  style?: any;
  [key: string]: any;
}) => {
  const rowStyles = StyleSheet.create({
    marginTop: sizes.margin,
    minHeight: 28,
    backgroundColor: colors.gray4,
    borderTopWidth: 0.5,
    borderTopColor: colors.darkGray,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.darkGray,
    ...style
  });

  if (typeof summaryRowComponent === 'function') {
    return summaryRowComponent({
      data,
      Block,
      Text
    });
  }

  return (
    <Block flex={false} fixed row middle style={rowStyles} {...props}>
      {columns.map(({ name, width }) => {
        const summaryFunction = summary[name];

        if (summaryFunction && typeof summaryFunction === 'function') {
          const value = summaryFunction({ data, Block, Text });
          return typeof value === 'string' ? (
            <GridCell key={`${name}`} width={width}>
              <Text bold darkGray>
                {value}
              </Text>
            </GridCell>
          ) : (
            value
          );
        }

        return (
          <GridCell key={`${name}`} width={width}>
            <Text bold darkGray>
              {summaryFunction}
            </Text>
          </GridCell>
        );
      })}
    </Block>
  );
};

SummaryRow.defaultProps = {
  columns: [],
  summary: {}
};

export default SummaryRow;
