"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Block = _interopRequireDefault(require("./Block"));

var _DataRow = _interopRequireDefault(require("./DataRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = function Grid(_ref) {
  var data = _ref.data,
      columns = _ref.columns,
      getRowId = _ref.getRowId,
      rowComponent = _ref.rowComponent,
      cellComponent = _ref.cellComponent;
  return /*#__PURE__*/_react.default.createElement(_Block.default, null, data.map(function (row, index) {
    var datarow = columns.map(function (col) {
      return {
        key: col.name,
        value: row[col.name],
        width: col.width
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

    return /*#__PURE__*/_react.default.createElement(_DataRow.default, {
      key: "".concat(rowkey, "-").concat(index),
      row: row,
      datarow: datarow,
      cellComponent: cellComponent
    });
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