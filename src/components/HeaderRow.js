import React from 'react';
import { StyleSheet } from '@react-pdf/renderer';
import Block from './Block';
import Text from './Text';
import { colors, sizes } from '../theme';

import GridCell from './GridCell';

const HeaderRow = ({ columns, style }) => {
  const rowStyles = StyleSheet.create({
    marginTop: sizes.margin,
    height: 28,
    backgroundColor: colors.gray4,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray,
    ...style
  });

  return (
    <Block flex={false} row middle style={rowStyles} fixed>
      {columns.map(({ title, width }) => (
        <GridCell key={`${title}`} title={title} width={width}>
          <Text bold>{title}</Text>
        </GridCell>
      ))}
    </Block>
  );
};

HeaderRow.defaultProps = {
  columns: []
};

export default HeaderRow;
