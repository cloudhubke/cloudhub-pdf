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
    {typeof signoff === 'string' ? (
      <Block
        padding={[sizes.padding / 2, sizes.padding * 1.5]}
        color={colors.gray4}
        style={{ marginTop: sizes.margin }}
      >
        <Block center>
          <Text h6 thin>
            {signoff || 'Thank you for your business'}
          </Text>
        </Block>
      </Block>
    ) : (
      signoff
    )}
  </Block>
);

export default ReportFooter;
