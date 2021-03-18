"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _renderer = require("@react-pdf/renderer");

var _theme = require("../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Create Document Component
var Page = function Page(_ref) {
  var style = _ref.style,
      color = _ref.color,
      props = _objectWithoutProperties(_ref, ["style", "color"]);

  var pageStyles = _renderer.StyleSheet.create(_objectSpread(_objectSpread(_objectSpread({}, color && styles[color]), color && !styles[color] && {
    backgroundColor: color
  }), style));

  return /*#__PURE__*/_react.default.createElement(_renderer.Page, _extends({
    style: pageStyles
  }, props));
};

Page.defaultProps = {
  size: 'A4'
};
var styles = {
  accent: {
    backgroundColor: _theme.colors.accent
  },
  primary: {
    backgroundColor: _theme.colors.primary
  },
  secondary: {
    backgroundColor: _theme.colors.secondary
  },
  tertiary: {
    backgroundColor: _theme.colors.tertiary
  },
  black: {
    backgroundColor: _theme.colors.black
  },
  white: {
    backgroundColor: _theme.colors.white
  },
  gray: {
    backgroundColor: _theme.colors.gray
  },
  gray2: {
    backgroundColor: _theme.colors.gray2
  },
  gray3: {
    backgroundColor: _theme.colors.gray3
  },
  gray4: {
    backgroundColor: _theme.colors.gray4
  },
  dark: {
    backgroundColor: _theme.colors.dark
  },
  mistyWhite: {
    backgroundColor: _theme.colors.mistyWhite
  },
  milkyWhite: {
    backgroundColor: _theme.colors.milkyWhite
  },
  error: {
    backgroundColor: _theme.colors.error
  },
  clear: {
    backgroundColor: _theme.colors.clear
  },
  facebook: {
    backgroundColor: _theme.colors.facebook
  },
  transparent: {
    backgroundColor: _theme.colors.transparent
  },
  silver: {
    backgroundColor: _theme.colors.silver
  },
  steel: {
    backgroundColor: _theme.colors.steel
  },
  ricePaper: {
    backgroundColor: _theme.colors.ricePaper
  },
  frost: {
    backgroundColor: _theme.colors.frost
  },
  cloud: {
    backgroundColor: _theme.colors.cloud
  },
  windowTint: {
    backgroundColor: _theme.colors.windowTint
  },
  panther: {
    backgroundColor: _theme.colors.panther
  },
  charcoal: {
    backgroundColor: _theme.colors.charcoal
  },
  coal: {
    backgroundColor: _theme.colors.coal
  },
  bloodOrange: {
    backgroundColor: _theme.colors.bloodOrange
  },
  snow: {
    backgroundColor: _theme.colors.snow
  },
  ember: {
    backgroundColor: _theme.colors.ember
  },
  fire: {
    backgroundColor: _theme.colors.fire
  },
  drawer: {
    backgroundColor: _theme.colors.drawer
  },
  eggplant: {
    backgroundColor: _theme.colors.eggplant
  },
  twitterColor: {
    backgroundColor: _theme.colors.twitterColor
  },
  facebookColor: {
    backgroundColor: _theme.colors.twitterColor
  },
  googleColor: {
    backgroundColor: _theme.colors.twitterColor
  },
  linkedinColor: {
    backgroundColor: _theme.colors.twitterColor
  },
  pinterestColor: {
    backgroundColor: _theme.colors.twitterColor
  },
  youtubeColor: {
    backgroundColor: _theme.colors.twitterColor
  },
  tumblrColor: {
    backgroundColor: _theme.colors.twitterColor
  },
  behanceColor: {
    backgroundColor: _theme.colors.twitterColor
  },
  dribbbleColor: {
    backgroundColor: _theme.colors.twitterColor
  },
  redditColor: {
    backgroundColor: _theme.colors.twitterColor
  },
  instagramColor: {
    backgroundColor: _theme.colors.twitterColor
  },
  success: {
    backgroundColor: _theme.colors.success
  },
  info: {
    backgroundColor: _theme.colors.info
  },
  rose: {
    backgroundColor: _theme.colors.rose
  },
  warning: {
    backgroundColor: _theme.colors.warning
  },
  danger: {
    backgroundColor: _theme.colors.danger
  }
};
var _default = Page;
exports.default = _default;