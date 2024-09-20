"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Text = _interopRequireDefault(require("./Text"));

var _GridCell = _interopRequireDefault(require("./GridCell"));

var _Block = _interopRequireWildcard(require("./Block"));

var _hextToRgb = _interopRequireDefault(require("../theme/hextToRgb"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Row = function Row(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/_react.default.createElement(_Block.default, _extends({
    flex: false,
    row: true
  }, props), children);
};

var getColor = function getColor(color, opacity) {
  return "rgba(".concat((0, _hextToRgb.default)(color), ", ").concat(opacity, ")");
};

var KeyValueTable = function KeyValueTable(_ref2) {
  var data = _ref2.data,
      _ref2$showCounter = _ref2.showCounter,
      showCounter = _ref2$showCounter === void 0 ? false : _ref2$showCounter,
      _ref2$opacity = _ref2.opacity,
      opacity = _ref2$opacity === void 0 ? 0.5 : _ref2$opacity,
      small = _ref2.small,
      _ref2$keyContainerSty = _ref2.keyContainerStyles,
      keyContainerStyles = _ref2$keyContainerSty === void 0 ? {} : _ref2$keyContainerSty,
      _ref2$valueContainerS = _ref2.valueContainerStyles,
      valueContainerStyles = _ref2$valueContainerS === void 0 ? {} : _ref2$valueContainerS,
      props = _objectWithoutProperties(_ref2, ["data", "showCounter", "opacity", "small", "keyContainerStyles", "valueContainerStyles"]);

  return /*#__PURE__*/_react.default.createElement(_Block.default, _extends({
    style: {
      borderRadius: 10,
      overflow: 'hidden'
    },
    flex: false
  }, props), Object.keys(data).map(function (key, index) {
    return /*#__PURE__*/_react.default.createElement(Row, {
      key: key,
      style: {
        paddingVertical: 5,
        backgroundColor: index % 2 === 0 ? getColor('#DDDDDD', opacity) : getColor('#FFFFFF', opacity),
        borderBottomColor: '#AAAAAA',
        borderBottomWidth: 0.5
      }
    }, showCounter ? /*#__PURE__*/_react.default.createElement(_GridCell.default, {
      style: {
        flex: 0,
        marginHorizontal: 5
      }
    }, /*#__PURE__*/_react.default.createElement(_Block.default, {
      flex: false,
      style: {
        height: 24,
        width: 24,
        borderRadius: 24
      }
    }, /*#__PURE__*/_react.default.createElement(_Text.default, {
      small: small
    }, index + 1))) : /*#__PURE__*/_react.default.createElement(_Block.default, {
      flex: false,
      style: {
        flex: 0,
        marginHorizontal: 5
      }
    }), /*#__PURE__*/_react.default.createElement(_GridCell.default, {
      style: _objectSpread({}, keyContainerStyles)
    }, /*#__PURE__*/_react.default.createElement(_Text.default, {
      bold: true,
      small: small
    }, key)), /*#__PURE__*/_react.default.createElement(_GridCell.default, {
      style: _objectSpread({}, valueContainerStyles)
    }, typeof data[key] === 'string' || typeof data[key] === 'number' ? /*#__PURE__*/_react.default.createElement(_Text.default, {
      small: small
    }, data[key]) : data[key]));
  }));
};

var _default = KeyValueTable;
exports.default = _default;