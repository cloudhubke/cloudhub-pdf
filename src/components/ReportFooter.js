import React from 'react';
import Block from './Block';
import Text from './Text';
import { sizes } from '../theme';

const ReportFooter = ({
  bottom,
  left,
  right,
  style = {},
  leftStyle = {},
  rightStyle = {},
  bottomStyle = {},
  ...props
}) => (
  <Block
    name="SUB-HEADER"
    flex={false}
    style={{ marginTop: sizes.margin * 2, ...style }}
    {...props}
  >
    <Block
      flex={false}
      row
      padding={[sizes.padding / 2, sizes.padding * 1.5, 0, sizes.padding * 2]}
    >
      <Block style={{ ...leftStyle }}>{left}</Block>
      <Block style={{ ...rightStyle }}>{right}</Block>
    </Block>
    {typeof bottom === 'string' ? (
      <Block
        padding={[sizes.padding / 2, sizes.padding * 1.5]}
        style={{ marginTop: sizes.margin, ...bottomStyle }}
      >
        <Block center>
          <Text h6 thin>
            {bottom || 'Thank you for your business'}
          </Text>
        </Block>
      </Block>
    ) : (
      bottom
    )}
  </Block>
);

export default ReportFooter;
