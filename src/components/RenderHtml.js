import React from 'react';
import Text from './Text';
import { parse } from 'himalaya';
import Block from './Block';
import { PdfView } from './';
import { sizes } from '../theme';

const RenderText = ({ item }) => {
  return <Text>{item.content}</Text>;
};

const alphabets = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

const flattenElements = (html) => {
  let arr = [];
  const getJson = (elements, attributes = {}) => {
    elements.map((item, index) => {
      if (item.children) {
        getJson(item.children, {
          bold: item.tagName === 'strong',
          tagName: item.tagName || '',
          count: index + 1
        });
      }
      if (item.content) {
        item.content = `${item.content}`.replace(/&nbsp;/g, ` `);
        arr.push({ ...item, ...attributes });
      }
    });
  };

  getJson(html);

  return arr;
};

const RenderHtml = ({ html, childObjects }) => {
  const jsonarray = flattenElements(parse(html));

  const renderJson = () => {
    let i = -1;
    return jsonarray.map((item, index) => {
      if (item.content === '\n' && i > 0) {
        return <Text key={index}>{`\n\n`}</Text>;
      }
      if (childObjects[item.content]) {
        return childObjects[item.content];
      }
      if (item.tagName === 'li') {
        i++;
      }

      return (
        <React.Fragment key={index}>
          {item.tagName === 'li' && (
            <Text bold style={{ paddingRight: 10 }}>
              {`${alphabets[i]})  `}
            </Text>
          )}

          <Text bold={item.bold} black>
            {item.content}
          </Text>
        </React.Fragment>
      );
    });
  };

  return <Text style={{ textAlign: 'justify' }}>{renderJson()}</Text>;
};

export default RenderHtml;
