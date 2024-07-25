"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Block = _interopRequireDefault(require("./Block"));

var _Text = _interopRequireDefault(require("./Text"));

var _theme = require("../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ReportFooter = function ReportFooter(_ref) {
  var _ref$bottom = _ref.bottom,
      bottom = _ref$bottom === void 0 ? 'Thank you for your business' : _ref$bottom,
      left = _ref.left,
      right = _ref.right,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$leftStyle = _ref.leftStyle,
      leftStyle = _ref$leftStyle === void 0 ? {} : _ref$leftStyle,
      _ref$rightStyle = _ref.rightStyle,
      rightStyle = _ref$rightStyle === void 0 ? {} : _ref$rightStyle,
      _ref$bottomStyle = _ref.bottomStyle,
      bottomStyle = _ref$bottomStyle === void 0 ? {} : _ref$bottomStyle,
      footnotes = _ref.footnotes,
      _ref$footnotesStyle = _ref.footnotesStyle,
      footnotesStyle = _ref$footnotesStyle === void 0 ? {} : _ref$footnotesStyle,
      props = _objectWithoutProperties(_ref, ["bottom", "left", "right", "style", "leftStyle", "rightStyle", "bottomStyle", "footnotes", "footnotesStyle"]);

  return /*#__PURE__*/_react.default.createElement(_Block.default, _extends({
    name: "SUB-HEADER",
    flex: false,
    style: _objectSpread({
      marginTop: _theme.sizes.margin * 2
    }, style)
  }, props), /*#__PURE__*/_react.default.createElement(_Block.default, {
    flex: false,
    row: true,
    padding: [_theme.sizes.padding / 2, _theme.sizes.padding * 1.5, 0, _theme.sizes.padding * 2]
  }, /*#__PURE__*/_react.default.createElement(_Block.default, {
    flex: false,
    style: _objectSpread({}, leftStyle)
  }, left), /*#__PURE__*/_react.default.createElement(_Block.default, {
    flex: false,
    style: _objectSpread({}, rightStyle)
  }, right)), typeof bottom === 'string' ? /*#__PURE__*/_react.default.createElement(_Block.default, {
    padding: [_theme.sizes.padding / 2, _theme.sizes.padding * 1.5],
    style: _objectSpread({
      marginTop: _theme.sizes.margin
    }, bottomStyle),
    flex: false,
    center: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    h6: true,
    thin: true
  }, bottom)) : bottom, typeof footnotes === 'string' ? /*#__PURE__*/_react.default.createElement(_Block.default, {
    padding: [_theme.sizes.padding / 2, _theme.sizes.padding * 1.5],
    style: _objectSpread({
      marginTop: _theme.sizes.margin
    }, footnotesStyle),
    flex: false,
    center: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    h6: true,
    thin: true
  }, footnotes)) : footnotes);
};

var _default = ReportFooter;
exports.default = _default;