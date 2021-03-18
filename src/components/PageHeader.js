import React from 'react';
import { StyleSheet } from '@react-pdf/renderer';
import Block from './Block';
import { colors, sizes } from '../theme';

const PageHeader = ({ style, children, ...props }) => {
  const footerStyles = StyleSheet.create({
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray2,
    ...style
  });

  return (
    <Block
      flex={false}
      style={footerStyles}
      margin={[0, sizes.margin * 1.5, 0, sizes.margin * 2]}
      fixed
      {...props}
    >
      {children}
    </Block>
  );
};

PageHeader.defaultProps = {};

export default PageHeader;
