"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _renderer = require("@react-pdf/renderer");

var _Block = _interopRequireDefault(require("./Block"));

var _Text = _interopRequireDefault(require("./Text"));

var _theme = require("../../theme");

var _GridCell = _interopRequireDefault(require("./GridCell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HeaderRow = function HeaderRow(_ref) {
  var columns = _ref.columns,
      style = _ref.style;

  var rowStyles = _renderer.StyleSheet.create(_objectSpread({
    marginTop: _theme.sizes.margin,
    height: 28,
    backgroundColor: _theme.colors.gray4,
    borderBottomWidth: 0.5,
    borderBottomColor: _theme.colors.gray
  }, style));

  return /*#__PURE__*/_react.default.createElement(_Block.default, {
    flex: false,
    row: true,
    middle: true,
    style: rowStyles,
    fixed: true
  }, columns.map(function (_ref2) {
    var title = _ref2.title,
        width = _ref2.width;
    return /*#__PURE__*/_react.default.createElement(_GridCell.default, {
      key: "".concat(title),
      title: title,
      width: width
    }, /*#__PURE__*/_react.default.createElement(_Text.default, {
      bold: true
    }, title));
  }));
};

HeaderRow.defaultProps = {
  columns: []
};
var _default = HeaderRow;
exports.default = _default;