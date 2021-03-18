"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _renderer = require("@react-pdf/renderer");

var _geomanistRegular = _interopRequireDefault(require("./fonts/geomanist/geomanist-regular.ttf"));

var _geomanistMedium = _interopRequireDefault(require("./fonts/geomanist/geomanist-medium.ttf"));

var _geomanistBook = _interopRequireDefault(require("./fonts/geomanist/geomanist-book.ttf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_renderer.Font.register({
  family: 'geomanist',
  fonts: [{
    src: _geomanistRegular.default,
    fontWeight: 'normal'
  }, {
    src: _geomanistMedium.default,
    fontWeight: 'semibold'
  }, {
    src: _geomanistBook.default,
    fontWeight: 'bold'
  }]
});

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