"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _Block = _interopRequireDefault(require("./Block"));

var _Text = _interopRequireDefault(require("./Text"));

var _theme = require("../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SubHeader = function SubHeader(_ref) {
  var title = _ref.title,
      left = _ref.left,
      right = _ref.right,
      topContainerProps = _ref.topContainerProps,
      bottomContainerProps = _ref.bottomContainerProps;
  var now = "".concat((0, _moment.default)().format('DD MMM, YYYY'));
  return /*#__PURE__*/_react.default.createElement(_Block.default, {
    name: "SUB-HEADER",
    flex: false
  }, /*#__PURE__*/_react.default.createElement(_Block.default, _extends({
    color: _theme.colors.gray4
  }, topContainerProps), title || /*#__PURE__*/_react.default.createElement(_Block.default, {
    right: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    h6: true,
    thin: true
  }, now))), /*#__PURE__*/_react.default.createElement(_Block.default, _extends({
    flex: false,
    row: true
  }, bottomContainerProps), /*#__PURE__*/_react.default.createElement(_Block.default, null, left), /*#__PURE__*/_react.default.createElement(_Block.default, null, right)));
};

var _default = SubHeader;
exports.default = _default;