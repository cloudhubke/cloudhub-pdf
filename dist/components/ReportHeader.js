"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _renderer = require("@react-pdf/renderer");

var _Block = _interopRequireDefault(require("./Block"));

var _theme = require("../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReportHeader = function ReportHeader(_ref) {
  var logo = _ref.logo,
      left = _ref.left,
      middle = _ref.middle,
      right = _ref.right;
  return /*#__PURE__*/_react.default.createElement(_Block.default, {
    name: "HEADER",
    flex: false
  }, /*#__PURE__*/_react.default.createElement(_Block.default, {
    flex: false,
    row: true,
    padding: [_theme.sizes.padding, _theme.sizes.padding * 1.5, 0, _theme.sizes.padding * 2],
    color: _theme.colors.gray3
  }, /*#__PURE__*/_react.default.createElement(_Block.default, {
    row: true
  }, left || /*#__PURE__*/_react.default.createElement(_Block.default, {
    flex: false,
    style: {
      width: 120,
      height: 65
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Image, {
    src: logo,
    style: {
      height: '100%',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/_react.default.createElement(_Block.default, {
    center: true,
    middle: true,
    padding: [0, 5]
  }, middle), /*#__PURE__*/_react.default.createElement(_Block.default, {
    right: true,
    flex: false
  }, right))));
};

var _default = ReportHeader;
exports.default = _default;