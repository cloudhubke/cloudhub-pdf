import React from 'react';
import Block from './Block';
import Text from './Text';
import { colors, sizes } from '../theme';

const ReportFooter = ({ signoff, left, right, ...props }) => (
  <Block
    name="SUB-HEADER"
    flex={false}
    style={{ marginTop: sizes.margin * 2 }}
    {...props}
  >
    <Block
      flex={false}
      row
      padding={[sizes.padding / 2, sizes.padding * 1.5, 0, sizes.padding * 2]}
    >
      <Block>{left}</Block>
      <Block>{right}</Block>
    </Block>
    {signoff || (
      <Block
        padding={[sizes.padding / 2, sizes.padding * 1.5]}
        color={colors.gray4}
        style={{ marginTop: sizes.margin }}
      >
        <Block center>
          <Text h6 thin>
            Thank you for your business
          </Text>
        </Block>
      </Block>
    )}
  </Block>
);

export default ReportFooter;
