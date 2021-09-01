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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ReportFooter = function ReportFooter(_ref) {
  var signoff = _ref.signoff,
      left = _ref.left,
      right = _ref.right,
      props = _objectWithoutProperties(_ref, ["signoff", "left", "right"]);

  return /*#__PURE__*/_react.default.createElement(_Block.default, _extends({
    name: "SUB-HEADER",
    flex: false,
    style: {
      marginTop: _theme.sizes.margin * 2
    }
  }, props), /*#__PURE__*/_react.default.createElement(_Block.default, {
    flex: false,
    row: true,
    padding: [_theme.sizes.padding / 2, _theme.sizes.padding * 1.5, 0, _theme.sizes.padding * 2]
  }, /*#__PURE__*/_react.default.createElement(_Block.default, null, left), /*#__PURE__*/_react.default.createElement(_Block.default, null, right)), typeof signoff === 'string' ? /*#__PURE__*/_react.default.createElement(_Block.default, {
    padding: [_theme.sizes.padding / 2, _theme.sizes.padding * 1.5],
    color: _theme.colors.gray4,
    style: {
      marginTop: _theme.sizes.margin
    }
  }, /*#__PURE__*/_react.default.createElement(_Block.default, {
    center: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    h6: true,
    thin: true
  }, signoff || 'Thank you for your business'))) : signoff);
};

var _default = ReportFooter;
exports.default = _default;