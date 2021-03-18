"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Text = _interopRequireDefault(require("./Text"));

var _himalaya = require("himalaya");

var _Block = _interopRequireDefault(require("./Block"));

var _ = require("./");

var _theme = require("../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RenderText = function RenderText(_ref) {
  var item = _ref.item;
  return /*#__PURE__*/_react.default.createElement(_Text.default, null, item.content);
};

var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var flattenElements = function flattenElements(html) {
  var arr = [];

  var getJson = function getJson(elements) {
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    elements.map(function (item, index) {
      if (item.children) {
        getJson(item.children, {
          bold: item.tagName === 'strong',
          tagName: item.tagName || '',
          count: index + 1
        });
      }

      if (item.content) {
        item.content = "".concat(item.content).replace(/&nbsp;/g, " ");
        arr.push(_objectSpread(_objectSpread({}, item), attributes));
      }
    });
  };

  getJson(html);
  return arr;
};

var RenderHtml = function RenderHtml(_ref2) {
  var html = _ref2.html,
      childObjects = _ref2.childObjects;
  var jsonarray = flattenElements((0, _himalaya.parse)(html));
  var flatIndex = 0;

  var renderJson = function renderJson() {
    var i = -1;
    return jsonarray.map(function (item, index) {
      flatIndex++;

      if (item.content === '\n' && i > 0) {
        return /*#__PURE__*/_react.default.createElement(_Text.default, {
          key: "".concat(item.tagName).concat(flatIndex)
        }, "\n\n");
      }

      if (childObjects[item.content]) {
        return childObjects[item.content];
      }

      if (item.tagName === 'li') {
        i++;
      }

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: "".concat(item.tagName).concat(flatIndex)
      }, item.tagName === 'li' && /*#__PURE__*/_react.default.createElement(_Text.default, {
        key: "li-".concat(flatIndex, "a"),
        bold: true,
        style: {
          paddingRight: 10
        }
      }, "".concat(alphabets[i], ")  ")), /*#__PURE__*/_react.default.createElement(_Text.default, {
        key: "li-".concat(flatIndex, "b"),
        bold: item.bold,
        black: true
      }, item.content));
    });
  };

  return /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "main",
    style: {
      textAlign: 'justify'
    }
  }, renderJson());
};

var _default = RenderHtml;
exports.default = _default;