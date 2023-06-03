"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _renderer = require("@react-pdf/renderer");

var _Block = _interopRequireDefault(require("./Block"));

var _Text = _interopRequireDefault(require("./Text"));

var _theme = require("../theme");

var _GridCell = _interopRequireDefault(require("./GridCell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SummaryRow = function SummaryRow(_ref) {
  var columns = _ref.columns,
      data = _ref.data,
      summary = _ref.summary,
      summaryRowComponent = _ref.summaryRowComponent,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["columns", "data", "summary", "summaryRowComponent", "style"]);

  var rowStyles = _renderer.StyleSheet.create(_objectSpread({
    marginTop: _theme.sizes.margin,
    minHeight: 28,
    backgroundColor: _theme.colors.gray4,
    borderTopWidth: 0.5,
    borderTopColor: _theme.colors.darkGray,
    borderBottomWidth: 0.5,
    borderBottomColor: _theme.colors.darkGray
  }, style));

  if (typeof summaryRowComponent === 'function') {
    return summaryRowComponent({
      data: data,
      Block: _Block.default,
      Text: _Text.default
    });
  }

  return /*#__PURE__*/_react.default.createElement(_Block.default, _extends({
    flex: false,
    fixed: true,
    row: true,
    middle: true,
    style: rowStyles
  }, props), columns.map(function (_ref2) {
    var name = _ref2.name,
        width = _ref2.width;
    var summaryFunction = summary[name];

    if (summaryFunction && typeof summaryFunction === 'function') {
      var value = summaryFunction({
        data: data,
        Block: _Block.default,
        Text: _Text.default
      });
      return typeof value === 'string' ? /*#__PURE__*/_react.default.createElement(_GridCell.default, {
        key: "".concat(name),
        width: width
      }, /*#__PURE__*/_react.default.createElement(_Text.default, {
        bold: true,
        darkGray: true
      }, value)) : value;
    }

    return /*#__PURE__*/_react.default.createElement(_GridCell.default, {
      key: "".concat(name),
      width: width
    }, /*#__PURE__*/_react.default.createElement(_Text.default, {
      bold: true,
      darkGray: true
    }, summaryFunction));
  }));
};

SummaryRow.defaultProps = {
  columns: [],
  summary: {}
};
var _default = SummaryRow;
exports.default = _default;