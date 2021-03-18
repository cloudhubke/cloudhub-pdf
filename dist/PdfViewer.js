"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _renderer = require("@react-pdf/renderer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import geomanistnormalfont from './fonts/geomanist/geomanist-regular.ttf';
// import geomanistmediumfont from './fonts/geomanist/geomanist-medium.ttf';
// import geomanistbookfont from './fonts/geomanist/geomanist-book.ttf';
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
var PdfViewer = function PdfViewer(_ref) {
  var children = _ref.children;
  var store = {};
  return /*#__PURE__*/_react.default.createElement(_renderer.PDFViewer, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, children);
};

var _default = PdfViewer;
exports.default = _default;