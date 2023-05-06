"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Block = _interopRequireDefault(require("./Block"));

var _Text = _interopRequireDefault(require("./Text"));

var _DataRow = _interopRequireDefault(require("./DataRow"));

var _theme = require("../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Grid = function Grid(_ref) {
  var data = _ref.data,
      columns = _ref.columns,
      getRowId = _ref.getRowId,
      rowComponent = _ref.rowComponent,
      cellComponent = _ref.cellComponent,
      detailComponent = _ref.detailComponent,
      _ref$rowStyle = _ref.rowStyle,
      rowStyle = _ref$rowStyle === void 0 ? {} : _ref$rowStyle;
  return /*#__PURE__*/_react.default.createElement(_Block.default, null, data.map(function (row, index) {
    var datarow = columns.map(function (col) {
      return {
        key: col.name,
        value: row[col.name],
        width: col.width,
        render: col.render
      };
    });
    var rowkey = getRowId(row);

    if (rowComponent && typeof rowComponent === 'function') {
      return rowComponent({
        key: rowkey,
        index: index,
        row: row,
        datarow: datarow
      });
    }

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_DataRow.default, {
      key: "".concat(rowkey, "-").concat(index),
      row: row,
      datarow: datarow,
      cellComponent: cellComponent,
      style: _objectSpread(_objectSpread({}, detailComponent && {
        borderBottomWidth: 0
      }), rowStyle)
    }), detailComponent && /*#__PURE__*/_react.default.createElement(_Block.default, {
      flex: false,
      row: true,
      wrap: false,
      style: {
        paddingTop: 5,
        marginLeft: _theme.sizes.margin * 2,
        borderBottomWidth: 0.5,
        borderBottomColor: _theme.colors.gray
      }
    }, detailComponent({
      row: row,
      Text: _Text.default,
      Block: _Block.default
    })));
  }));
};

Grid.defaultProps = {
  rowComponent: null,
  cellComponent: null,
  data: [],
  columns: [],
  getRowId: function getRowId(row) {
    return row ? row.id : null;
  }
};
var _default = Grid;
exports.default = _default;