"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _renderer = require("@react-pdf/renderer");

var _theme = require("../theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useBlockStyles = function useBlockStyles(_ref) {
  var name = _ref.name,
      absolute = _ref.absolute,
      flex = _ref.flex,
      row = _ref.row,
      column = _ref.column,
      wrap = _ref.wrap,
      center = _ref.center,
      middle = _ref.middle,
      left = _ref.left,
      right = _ref.right,
      top = _ref.top,
      bottom = _ref.bottom,
      margin = _ref.margin,
      padding = _ref.padding,
      elevation = _ref.elevation,
      color = _ref.color,
      space = _ref.space,
      style = _ref.style,
      animated = _ref.animated,
      paper = _ref.paper,
      visible = _ref.visible,
      opacity = _ref.opacity,
      otherprops = _objectWithoutProperties(_ref, ["name", "absolute", "flex", "row", "column", "wrap", "center", "middle", "left", "right", "top", "bottom", "margin", "padding", "elevation", "color", "space", "style", "animated", "paper", "visible", "opacity"]);

  var handleMargins = function handleMargins(margin) {
    if (typeof margin === 'number') {
      return {
        marginTop: margin,
        marginRight: margin,
        marginBottom: margin,
        marginLeft: margin
      };
    }

    if (_typeof(margin) === 'object') {
      var marginSize = Object.keys(margin).length;

      switch (marginSize) {
        case 1:
          return {
            marginTop: margin[0],
            marginRight: margin[0],
            marginBottom: margin[0],
            marginLeft: margin[0]
          };

        case 2:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[0],
            marginLeft: margin[1]
          };

        case 3:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[1]
          };

        default:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[3]
          };
      }
    }

    return null;
  };

  var handlePaddings = function handlePaddings(padding) {
    if (typeof padding === 'number') {
      return {
        paddingTop: padding,
        paddingRight: padding,
        paddingBottom: padding,
        paddingLeft: padding
      };
    }

    if (_typeof(padding) === 'object' && Array.isArray(padding)) {
      var paddingSize = padding.length;

      switch (paddingSize) {
        case 1:
          return {
            paddingTop: padding[0],
            paddingRight: padding[0],
            paddingBottom: padding[0],
            paddingLeft: padding[0]
          };

        case 2:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[0],
            paddingLeft: padding[1]
          };

        case 3:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[1]
          };

        default:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[3]
          };
      }
    }

    return null;
  };

  var blockStyles = _renderer.StyleSheet.create(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, flex === false ? {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column'
  } : _objectSpread({}, styles.block)), row && styles.row), absolute && {
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0
  }), column && styles.column), wrap && {
    flexWrap: 'wrap'
  }), center && (row ? {
    justifyContent: 'center'
  } : styles.center)), middle && (row ? {
    alignItems: 'center'
  } : styles.middle)), left && (row ? {
    justifyContent: 'flex-start'
  } : styles.left)), right && (row ? {
    justifyContent: 'flex-end'
  } : styles.right)), top && (row ? {
    alignItems: 'flex-start'
  } : styles.top)), bottom && (row ? {
    alignItems: 'flex-end'
  } : styles.bottom)), margin && _objectSpread({}, handleMargins(margin))), padding && _objectSpread({}, handlePaddings(padding))), space && {
    justifyContent: "space-".concat(space)
  }), color && styles[color]), color && !styles[color] && {
    backgroundColor: color
  }), style));

  return {
    blockStyles: blockStyles,
    otherprops: otherprops
  };
};

var styles = {
  block: {
    flex: 1,
    display: 'flex',
    position: 'relative',
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  },
  center: {
    alignItems: 'center'
  },
  middle: {
    justifyContent: 'center'
  },
  left: {
    alignItems: 'flex-start'
  },
  right: {
    alignItems: 'flex-end'
  },
  top: {
    justifyContent: 'flex-start'
  },
  bottom: {
    justifyContent: 'flex-end'
  },
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
exports.styles = styles;
var _default = useBlockStyles;
exports.default = _default;