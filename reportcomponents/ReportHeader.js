import React from 'react';
import { Image } from '@react-pdf/renderer';
import Block from './Block';
import { colors, sizes } from '../../theme';

const ReportHeader = ({ logo, left, middle, right }) => (
  <Block name="HEADER" flex={false}>
    <Block
      flex={false}
      row
      padding={[sizes.padding, sizes.padding * 1.5, 0, sizes.padding * 2]}
      color={colors.gray3}
    >
      <Block row>
        {left || (
          <Block flex={false} style={{ width: 120, height: 65 }}>
            <Image
              src={logo}
              style={{
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </Block>
        )}
        <Block absolute center middle>
          {middle}
        </Block>
        <Block right>{right}</Block>
      </Block>
    </Block>
  </Block>
);

export default ReportHeader;
