"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var hexToRgb = function hexToRgb(hexcolor) {
  var input = hexcolor;
  input += '';
  input = input.replace('#', '');
  var hexRegex = /[0-9A-Fa-f]/g;

  if (!hexRegex.test(input) || input.length !== 3 && input.length !== 6) {
    throw new Error('input is not a valid hex color.');
  }

  if (input.length === 3) {
    var _first = input[0];
    var _second = input[1];
    var _last = input[2];
    input = _first + _first + _second + _second + _last + _last;
  }

  input = input.toUpperCase(input);
  var first = input[0] + input[1];
  var second = input[2] + input[3];
  var last = input[4] + input[5];
  return "".concat(parseInt(first, 16), ", ").concat(parseInt(second, 16), ", ").concat(parseInt(last, 16));
};

var _default = hexToRgb;
exports.default = _default;