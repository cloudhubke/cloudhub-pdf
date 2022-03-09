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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DataRow = function DataRow(_ref) {
  var row = _ref.row,
      datarow = _ref.datarow,
      cellComponent = _ref.cellComponent,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["row", "datarow", "cellComponent", "style"]);

  var rowStyles = _renderer.StyleSheet.create(_objectSpread({
    // height: 28,
    borderBottomWidth: 0.5,
    borderBottomColor: _theme.colors.gray
  }, style)); // const renderRow = () =>
  //   datarow.map(({ key, value, width }) => {
  //     if (cellComponent) {
  //       return (
  //         <GridCell key={key} width={width} middle={false}>
  //           {cellComponent({ row, column: key })}
  //         </GridCell>
  //       );
  //     }
  //     return (
  //       <GridCell key={key} width={width}>
  //         <Text bold>{`${value || ''}`}</Text>
  //       </GridCell>
  //     );
  //   });


  return /*#__PURE__*/_react.default.createElement(_Block.default, {
    flex: false,
    row: true,
    middle: true,
    style: rowStyles,
    fixed: true
  }, datarow.map(function (_ref2) {
    var key = _ref2.key,
        value = _ref2.value,
        width = _ref2.width,
        _ref2$textStyle = _ref2.textStyle,
        textStyle = _ref2$textStyle === void 0 ? {
      textAlign: 'left'
    } : _ref2$textStyle;
    return /*#__PURE__*/_react.default.createElement(_GridCell.default, {
      key: "".concat(key),
      width: width,
      style: {
        height: 20
      }
    }, /*#__PURE__*/_react.default.createElement(_Text.default, {
      bold: true,
      style: _objectSpread({}, textStyle)
    }, value));
  }));
};

DataRow.defaultProps = {
  row: []
};
var _default = DataRow;
exports.default = _default;