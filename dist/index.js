"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  PdfViewer: true
};
Object.defineProperty(exports, "PdfViewer", {
  enumerable: true,
  get: function get() {
    return _PdfViewer.default;
  }
});

var _components = require("./components");

Object.keys(_components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _components[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _components[key];
    }
  });
});

var _PdfViewer = _interopRequireDefault(require("./PdfViewer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }