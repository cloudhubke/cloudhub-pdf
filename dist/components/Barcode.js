"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Image = _interopRequireDefault(require("./Image"));

var _isNode = _interopRequireDefault(require("is-node"));

var _jsbarcode = _interopRequireDefault(require("jsbarcode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getClientBarcode(text) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // For Barcode
  var canvas = document.createElement('canvas');
  (0, _jsbarcode.default)(canvas, text, _objectSpread({
    width: 4,
    background: 'transparent',
    displayValue: false
  }, options));
  var barcode = canvas.toDataURL();
  return barcode;
}

function getServerBarcode(text) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  try {
    var _require = require('canvas'),
        createCanvas = _require.createCanvas;

    var canvas = createCanvas();
    (0, _jsbarcode.default)(canvas, text, _objectSpread({
      width: 4,
      background: 'transparent',
      displayValue: false
    }, options));
    var barcode = canvas.toDataURL();
    return barcode;
  } catch (error) {
    console.log(error.toString());
  }
}

var Barcode = function Barcode(_ref) {
  var text = _ref.text,
      props = _objectWithoutProperties(_ref, ["text"]);

  if (_isNode.default && !process.env.GATSBY_NODE_GLOBALS) {
    var _barcode = getServerBarcode(text);

    return /*#__PURE__*/_react.default.createElement(_Image.default, _extends({
      src: _barcode
    }, props));
  }

  var barcode = getClientBarcode(text);
  return /*#__PURE__*/_react.default.createElement(_Image.default, _extends({
    src: barcode
  }, props));
};

var _default = Barcode;
exports.default = _default;