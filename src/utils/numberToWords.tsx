var towordsconverter = require('number-to-words');

const numberToWords = (val) => {
  return towordsconverter.toWords(val);
};

export default numberToWords;
