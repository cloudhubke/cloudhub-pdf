import React from 'react';
import { StyleSheet } from '@react-pdf/renderer';
import Block from './Block';
import { colors, sizes } from '../../theme';

const PageFooter = ({ style, children, ...props }) => {
  const footerStyles = StyleSheet.create({
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    borderTopWidth: 0.5,
    borderTopColor: colors.gray,
    backgroundColor: colors.gray4,
    ...style,
  });

  return (
    <Block
      flex={false}
      style={footerStyles}
      margin={[
        sizes.margin / 2,
        sizes.margin * 1.5,
        sizes.margin / 2,
        sizes.margin * 2,
      ]}
      padding={[sizes.padding / 2, 5]}
      fixed
      {...props}
    >
      {children}
    </Block>
  );
};

PageFooter.defaultProps = {};

export default PageFooter;
