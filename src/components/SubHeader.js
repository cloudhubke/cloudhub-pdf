import React from 'react';
import moment from 'moment';
import Block from './Block';
import Text from './Text';
import { colors, sizes } from '../../theme';

const SubHeader = ({ title, left, right }) => {
  const now = `${moment().format('DD MMM, YYYY')}`;

  return (
    <Block name="SUB-HEADER" flex={false}>
      <Block
        padding={[sizes.padding / 2, sizes.padding * 1.5]}
        color={colors.gray4}
      >
        {title || (
          <Block right>
            <Text h6 thin>
              {now}
            </Text>
          </Block>
        )}
      </Block>
      <Block
        flex={false}
        row
        padding={[sizes.padding / 2, sizes.padding * 1.5, 0, sizes.padding * 2]}
      >
        <Block>{left}</Block>
        <Block>{right}</Block>
      </Block>
    </Block>
  );
};

export default SubHeader;
