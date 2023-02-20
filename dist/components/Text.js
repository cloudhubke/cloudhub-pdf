"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _renderer = require("@react-pdf/renderer");

var _useTextStyles2 = _interopRequireDefault(require("./useTextStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Text = function Text(props) {
  var _useTextStyles = (0, _useTextStyles2.default)(props),
      textStyles = _useTextStyles.textStyles,
      otherprops = _useTextStyles.otherprops;

  return /*#__PURE__*/_react.default.createElement(_renderer.Text, _extends({
    wrap: true,
    style: textStyles
  }, otherprops));
};

var _default = Text;
exports.default = _default;