import React from 'react';
import { StyleSheet } from '@react-pdf/renderer';
import Block from './Block';

const WaterMark = ({ style, children }) => {
  const watermarkStyles = StyleSheet.create({
    position: 'absolute',
    bottom: '50%',
    left: 0,
    right: 0,
    transform: 'rotate(20deg)',
    ...style
  });

  return (
    <Block style={watermarkStyles} fixed center>
      {children}
    </Block>
  );
};

export default WaterMark;
