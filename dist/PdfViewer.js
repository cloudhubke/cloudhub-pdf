"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _renderer = require("@react-pdf/renderer");

var _isNode = _interopRequireDefault(require("is-node"));

var _PdfThemeProvider = _interopRequireDefault(require("./theme/PdfThemeProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// import wordHyphenation from './components/hyphenation';
// let geomanistnormalfont;
// let geomanistmediumfont;
// let geomanistbookfont;
// if (isNode) {
//   geomanistnormalfont = `${__dirname}/fonts/geomanist/geomanist-regular.ttf`;
//   geomanistmediumfont = `${__dirname}/fonts/geomanist/geomanist-medium.ttf`;
//   geomanistbookfont = `${__dirname}/fonts/geomanist/geomanist-book.ttf`;
// } else {
//   geomanistnormalfont = require('./fonts/geomanist/geomanist-regular.ttf')
//     .default;
//   geomanistmediumfont = require('./fonts/geomanist/geomanist-medium.ttf')
//     .default;
//   geomanistbookfont = require('./fonts/geomanist/geomanist-book.ttf').default;
// }
// Font.register({
//   family: 'geomanist',
//   fonts: [
//     {
//       src: geomanistnormalfont,
//       fontWeight: 'normal'
//     },
//     {
//       src: geomanistmediumfont,
//       fontWeight: 'semibold'
//     },
//     {
//       src: geomanistbookfont,
//       fontWeight: 'bold'
//     }
//   ]
// });
_renderer.Font.registerHyphenationCallback(function (word) {
  var middle = Math.floor(word.length / 2);
  var parts = word.length === 1 ? [word] : [word.substring(0, middle), word.substring(middle)];
  return parts;
});

var PdfViewer = function PdfViewer(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var store = {};

  if (_isNode.default) {
    return /*#__PURE__*/_react.default.createElement(_PdfThemeProvider.default, props, /*#__PURE__*/_react.default.createElement(_renderer.Document, null, children));
  }

  return /*#__PURE__*/_react.default.createElement(_PdfThemeProvider.default, props, /*#__PURE__*/_react.default.createElement(_renderer.PDFViewer, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Document, null, children)));
};

var _default = PdfViewer;
exports.default = _default;