"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _renderer = require("@react-pdf/renderer");

var _useBlockStyles2 = _interopRequireDefault(require("./useBlockStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Block = function Block(props) {
  var _useBlockStyles = (0, _useBlockStyles2.default)(props),
      blockStyles = _useBlockStyles.blockStyles,
      otherprops = _useBlockStyles.otherprops;

  return /*#__PURE__*/_react.default.createElement(_renderer.View, _extends({
    style: blockStyles
  }, otherprops));
};

var _default = Block;
exports.default = _default;