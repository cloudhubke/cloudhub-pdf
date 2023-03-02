"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var towordsconverter = require('number-to-words');

var numberToWords = function numberToWords(val) {
  return towordsconverter.toWords(val);
};

var _default = numberToWords;
exports.default = _default;