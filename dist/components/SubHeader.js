"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _Block = _interopRequireDefault(require("./Block"));

var _Text = _interopRequireDefault(require("./Text"));

var _theme = require("../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SubHeader = function SubHeader(_ref) {
  var title = _ref.title,
      left = _ref.left,
      right = _ref.right,
      topContainerProps = _ref.topContainerProps,
      bottomContainerProps = _ref.bottomContainerProps,
      props = _objectWithoutProperties(_ref, ["title", "left", "right", "topContainerProps", "bottomContainerProps"]);

  var now = "".concat((0, _dayjs.default)().format('DD MMM, YYYY'));
  return /*#__PURE__*/_react.default.createElement(_Block.default, _extends({
    color: _theme.colors.gray4,
    flex: false
  }, props), /*#__PURE__*/_react.default.createElement(_Block.default, _extends({
    flex: false,
    row: true
  }, topContainerProps), /*#__PURE__*/_react.default.createElement(_Block.default, null, left), /*#__PURE__*/_react.default.createElement(_Block.default, null, right)), /*#__PURE__*/_react.default.createElement(_Block.default, _extends({
    color: _theme.colors.gray2,
    padding: [_theme.sizes.padding, 0]
  }, bottomContainerProps), title || /*#__PURE__*/_react.default.createElement(_Block.default, {
    right: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    h6: true,
    thin: true
  }, now))));
};

var _default = SubHeader;
exports.default = _default;