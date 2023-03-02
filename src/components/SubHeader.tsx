import React from 'react';
import dayjs from 'dayjs';
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
  const now = `${dayjs().format('DD MMM, YYYY')}`;

  return (
    <Block color={colors.gray4} flex={false} {...props}>
      <Block flex={false} row {...topContainerProps}>
        <Block>{left}</Block>
        <Block>{right}</Block>
      </Block>
      <Block
        color={colors.gray2}
        padding={[sizes.padding, 0]}
        {...bottomContainerProps}
      >
        {title || (
          <Block right>
            <Text h6 thin>
              {now}
            </Text>
          </Block>
        )}
      </Block>
    </Block>
  );
};

export default SubHeader;
