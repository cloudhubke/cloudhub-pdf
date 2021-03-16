"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _Block = _interopRequireDefault(require("./Block"));

var _Text = _interopRequireDefault(require("./Text"));

var _theme = require("../../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubHeader = function SubHeader(_ref) {
  var title = _ref.title,
      left = _ref.left,
      right = _ref.right;
  var now = "".concat((0, _moment.default)().format('DD MMM, YYYY'));
  return /*#__PURE__*/_react.default.createElement(_Block.default, {
    name: "SUB-HEADER",
    flex: false
  }, /*#__PURE__*/_react.default.createElement(_Block.default, {
    padding: [_theme.sizes.padding / 2, _theme.sizes.padding * 1.5],
    color: _theme.colors.gray4
  }, title || /*#__PURE__*/_react.default.createElement(_Block.default, {
    right: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    h6: true,
    thin: true
  }, now))), /*#__PURE__*/_react.default.createElement(_Block.default, {
    flex: false,
    row: true,
    padding: [_theme.sizes.padding / 2, _theme.sizes.padding * 1.5, 0, _theme.sizes.padding * 2]
  }, /*#__PURE__*/_react.default.createElement(_Block.default, null, left), /*#__PURE__*/_react.default.createElement(_Block.default, null, right)));
};

var _default = SubHeader;
exports.default = _default;