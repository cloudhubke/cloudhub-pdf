import React from 'react';
import { StyleSheet } from '@react-pdf/renderer';
import Block from './Block';
import Text from './Text';
import { colors, sizes } from '../theme';

import GridCell from './GridCell';

const SummaryRow = ({ columns, data, summary, style, ...props }) => {
  const rowStyles = StyleSheet.create({
    marginTop: sizes.margin,
    height: 28,
    backgroundColor: colors.gray4,
    borderTopWidth: 0.5,
    borderTopColor: colors.darkGray,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.darkGray,
    ...style
  });

  return (
    <Block flex={false} fixed row middle style={rowStyles} {...props}>
      {columns.map(({ name, width }) => {
        const summaryFunction = summary[name];

        if (summaryFunction && typeof summaryFunction === 'function') {
          const value = summaryFunction({ data });
          return (
            <GridCell key={`${name}`} width={width}>
              <Text bold darkGray>
                {value}
              </Text>
            </GridCell>
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
