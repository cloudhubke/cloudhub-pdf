"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hyphen = _interopRequireDefault(require("hyphen"));

var _enUs = _interopRequireDefault(require("hyphen/patterns/en-us"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SOFT_HYPHEN = "\xAD";
var hyphenator = (0, _hyphen.default)(_enUs.default);

var splitHyphen = function splitHyphen(word) {
  return word.split(SOFT_HYPHEN);
};

var cache = {};

var getParts = function getParts(word) {
  var base = word.includes(SOFT_HYPHEN) ? word : hyphenator(word);
  return splitHyphen(base);
};

var wordHyphenation = function wordHyphenation() {
  return function (word) {
    var cacheKey = "_".concat(word);
    if (!Boolean(word)) return [];
    if (cache[cacheKey]) return cache[cacheKey];
    cache[cacheKey] = getParts(word);
    return cache[cacheKey];
  };
};

var _default = wordHyphenation;
exports.default = _default;