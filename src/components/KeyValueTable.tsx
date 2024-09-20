import React from 'react';
import Text from './Text';
import RowCell from './GridCell';
import Block, { BlockProps } from './Block';
import hexToRgb from '../theme/hextToRgb';

const Row = ({ children, ...props }) => {
  return (
    <Block flex={false} row {...props}>
      {children}
    </Block>
  );
};

const getColor = (color: string, opacity: number) => {
  return `rgba(${hexToRgb(color)}, ${opacity})`;
};

const KeyValueTable = ({
  data,
  showCounter = false,
  opacity = 0.5,
  small,
  keyContainerStyles = {},
  valueContainerStyles = {},
  ...props
}: BlockProps & {
  data: {
    [key: string]: string | number | React.ReactNode;
  };
  small?: boolean;
  showCounter?: boolean;
  keyContainerStyles?: any;
  valueContainerStyles?: any;
}) => {
  return (
    <Block
      style={{
        borderRadius: 10,
        overflow: 'hidden'
      }}
      flex={false}
      {...props}
    >
      {Object.keys(data).map((key, index) => (
        <Row
          key={key}
          style={{
            paddingVertical: 5,
            backgroundColor:
              index % 2 === 0
                ? getColor('#DDDDDD', opacity)
                : getColor('#FFFFFF', opacity),
            borderBottomColor: '#AAAAAA',
            borderBottomWidth: 0.5
          }}
        >
          {showCounter ? (
            <RowCell
              style={{
                flex: 0,
                marginHorizontal: 5
              }}
            >
              <Block
                flex={false}
                style={{
                  height: 24,
                  width: 24,
                  borderRadius: 24
                }}
              >
                <Text small={small}>{index + 1}</Text>
              </Block>
            </RowCell>
          ) : (
            <Block
              flex={false}
              style={{
                flex: 0,
                marginHorizontal: 5
              }}
            />
          )}

          <RowCell
            style={{
              ...keyContainerStyles
            }}
          >
            <Text bold small={small}>
              {key}
            </Text>
          </RowCell>
          <RowCell
            style={{
              ...valueContainerStyles
            }}
          >
            {typeof data[key] === 'string' || typeof data[key] === 'number' ? (
              <Text small={small}>{data[key]}</Text>
            ) : (
              data[key]
            )}
          </RowCell>
        </Row>
      ))}
    </Block>
  );
};

export default KeyValueTable;
