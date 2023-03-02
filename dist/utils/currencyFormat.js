"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _numeral = _interopRequireDefault(require("numeral"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var currencyFormat = function currencyFormat(n) {
  return (0, _numeral.default)(n).format('0,0.00');
};

var _default = currencyFormat;
exports.default = _default;