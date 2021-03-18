"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _theme = require("../theme");

var _HeaderRow = _interopRequireDefault(require("./HeaderRow"));

var _Block = _interopRequireDefault(require("./Block"));

var _Grid = _interopRequireDefault(require("./Grid"));

var _SummaryRow = _interopRequireDefault(require("./SummaryRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ReportGrid = function ReportGrid(_ref) {
  var columns = _ref.columns,
      data = _ref.data,
      summary = _ref.summary,
      rowComponent = _ref.rowComponent,
      cellComponent = _ref.cellComponent,
      props = _objectWithoutProperties(_ref, ["columns", "data", "summary", "rowComponent", "cellComponent"]);

  return (
    /*#__PURE__*/
    // const rowComponent = ({ index, ...props }) => (
    //   <DataRow
    //     {...props}
    //     color={index % 2 === 0 ? colors.gray3 : null}
    //     wrap={false}
    //   />
    // );
    // const cellComponent = ({ column, row }) => {
    //   if (column === 'Phone') {
    //     return (
    //       <GridCell>
    //         <Text small>{`${row.Phone}`}</Text>
    //       </GridCell>
    //     );
    //   }
    //   return (
    //     <GridCell>
    //       <Text>{`${row[column]}`}</Text>
    //     </GridCell>
    //   );
    // };
    _react.default.createElement(_Block.default, _extends({
      flex: false,
      margin: [0, _theme.sizes.margin * 1.5, 0, _theme.sizes.margin * 2]
    }, props), /*#__PURE__*/_react.default.createElement(_HeaderRow.default, {
      columns: columns
    }), /*#__PURE__*/_react.default.createElement(_Grid.default, {
      data: data,
      columns: columns,
      rowComponent: rowComponent,
      cellComponent: cellComponent
    }), /*#__PURE__*/_react.default.createElement(_SummaryRow.default, {
      data: data,
      columns: columns,
      summary: summary
    }))
  );
};

ReportGrid.defaultProps = {
  columns: [],
  summary: {},
  data: []
};
var _default = ReportGrid;
exports.default = _default;