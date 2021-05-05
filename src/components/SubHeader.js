import React from 'react';
import moment from 'moment';
import Block from './Block';
import Text from './Text';
import { colors, sizes } from '../theme';

const SubHeader = ({
  title,
  left,
  right,
  topContainerProps,
  bottomContainerProps,
  ...props
}) => {
  const now = `${moment().format('DD MMM, YYYY')}`;

  return (
    <Block name="SUB-HEADER" flex={false} {...props}>
      <Block color={colors.gray4} {...topContainerProps}>
        {title || (
          <Block right>
            <Text h6 thin>
              {now}
            </Text>
          </Block>
        )}
      </Block>
      <Block flex={false} row {...bottomContainerProps}>
        <Block>{left}</Block>
        <Block>{right}</Block>
      </Block>
    </Block>
  );
};

export default SubHeader;
