import React from 'react';
import { StyleSheet } from '@react-pdf/renderer';
import Block from './Block';
import Text from './Text';
import { colors, sizes } from '../theme';

import GridCell from './GridCell';

const HeaderRow = ({
  columns,
  style
}: {
  columns: Array<{
    name: string;
    title: string;
    width?: number;
    render?: (params: {
      row?: any;
      Text?: React.ReactNode;
    }) => React.ReactElement;
  }>;
  style?: any;
}) => {
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
      {columns.map(({ title, width, textStyle = { textAlign: 'left' } }) => (
        <GridCell key={`${title}`} title={title} width={width}>
          <Text bold style={{ ...textStyle }}>
            {title}
          </Text>
        </GridCell>
      ))}
    </Block>
  );
};

HeaderRow.defaultProps = {
  columns: []
};

export default HeaderRow;
