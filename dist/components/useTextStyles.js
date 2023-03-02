"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _renderer = require("@react-pdf/renderer");

var _theme = require("../theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  // default style
  text: {
    color: _theme.colors.black,
    fontSize: 10,
    lineHeight: 1.2
  },
  // variations
  regular: {
    fontWeight: 'normal'
  },
  bold: {
    fontWeight: 'bold'
  },
  semibold: {
    fontWeight: 'semibold'
  },
  medium: {
    fontWeight: 'medium'
  },
  light: {
    fontWeight: 'thin'
  },
  normal: {
    fontSize: 8,
    fontWeight: 'normal'
  },
  thin: {
    fontWeight: 'thin'
  },
  // position
  center: {
    textAlign: 'center'
  },
  right: {
    textAlign: 'right'
  },
  // colors
  accent: {
    color: _theme.colors.accent
  },
  primary: {
    color: _theme.colors.primary
  },
  secondary: {
    color: _theme.colors.secondary
  },
  tertiary: {
    color: _theme.colors.tertiary
  },
  black: {
    color: _theme.colors.black
  },
  white: {
    color: _theme.colors.white
  },
  gray: {
    color: _theme.colors.gray
  },
  gray2: {
    color: _theme.colors.gray2
  },
  dark: {
    color: _theme.colors.dark
  },
  mistyWhite: {
    color: _theme.colors.mistyWhite
  },
  milkyWhite: {
    color: _theme.colors.milkyWhite
  },
  error: {
    color: _theme.colors.error
  },
  clear: {
    color: _theme.colors.clear
  },
  facebook: {
    color: _theme.colors.facebook
  },
  transparent: {
    color: _theme.colors.transparent
  },
  silver: {
    color: _theme.colors.silver
  },
  steel: {
    color: _theme.colors.steel
  },
  ricePaper: {
    color: _theme.colors.ricePaper
  },
  frost: {
    color: _theme.colors.frost
  },
  cloud: {
    color: _theme.colors.cloud
  },
  windowTint: {
    color: _theme.colors.windowTint
  },
  panther: {
    color: _theme.colors.panther
  },
  charcoal: {
    color: _theme.colors.charcoal
  },
  coal: {
    color: _theme.colors.coal
  },
  bloodOrange: {
    color: _theme.colors.bloodOrange
  },
  snow: {
    color: _theme.colors.snow
  },
  ember: {
    color: _theme.colors.ember
  },
  fire: {
    color: _theme.colors.fire
  },
  drawer: {
    color: _theme.colors.drawer
  },
  eggplant: {
    color: _theme.colors.eggplant
  },
  twitterColor: {
    color: _theme.colors.twitterColor
  },
  facebookColor: {
    color: _theme.colors.facebookColor
  },
  googleColor: {
    color: _theme.colors.googleColor
  },
  linkedinColor: {
    color: _theme.colors.linkedinColor
  },
  pinterestColor: {
    color: _theme.colors.pinterestColor
  },
  youtubeColor: {
    color: _theme.colors.youtubeColor
  },
  tumblrColor: {
    color: _theme.colors.tumblrColor
  },
  behanceColor: {
    color: _theme.colors.behanceColor
  },
  dribbbleColor: {
    color: _theme.colors.dribbbleColor
  },
  redditColor: {
    color: _theme.colors.redditColor
  },
  instagramColor: {
    color: _theme.colors.instagramColor
  },
  success: {
    color: _theme.colors.success
  },
  info: {
    color: _theme.colors.info
  },
  rose: {
    color: _theme.colors.rose
  },
  warning: {
    color: _theme.colors.warning
  },
  danger: {
    color: _theme.colors.danger
  },
  // fonts
  h1: {
    fontSize: 20
  },
  h2: {
    fontSize: 18
  },
  h3: {
    fontSize: 16
  },
  h4: {
    fontSize: 14
  },
  h5: {
    fontSize: 12
  },
  h6: {
    fontSize: 11
  },
  title: {
    fontSize: 11,
    fontWeight: 'semibold'
  },
  subTitle: {
    fontSize: 10
  },
  header: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  subHeader: {
    fontSize: 11
  },
  body: {
    fontSize: 10
  },
  caption: {
    fontSize: 9
  },
  small: {
    fontSize: 8
  },
  tiny: {
    fontSize: 7
  }
};

var useTextStyles = function useTextStyles(_ref) {
  var lines = _ref.lines,
      lineHeight = _ref.lineHeight,
      h1 = _ref.h1,
      h2 = _ref.h2,
      h3 = _ref.h3,
      h4 = _ref.h4,
      h5 = _ref.h5,
      h6 = _ref.h6,
      title = _ref.title,
      subTitle = _ref.subTitle,
      header = _ref.header,
      subHeader = _ref.subHeader,
      body = _ref.body,
      caption = _ref.caption,
      small = _ref.small,
      tiny = _ref.tiny,
      size = _ref.size,
      transform = _ref.transform,
      button = _ref.button,
      regular = _ref.regular,
      bold = _ref.bold,
      normal = _ref.normal,
      semibold = _ref.semibold,
      medium = _ref.medium,
      weight = _ref.weight,
      light = _ref.light,
      center = _ref.center,
      right = _ref.right,
      spacing = _ref.spacing,
      height = _ref.height,
      noWrap = _ref.noWrap,
      fullWidth = _ref.fullWidth,
      color = _ref.color,
      accent = _ref.accent,
      primary = _ref.primary,
      secondary = _ref.secondary,
      tertiary = _ref.tertiary,
      black = _ref.black,
      white = _ref.white,
      gray = _ref.gray,
      gray2 = _ref.gray2,
      dark = _ref.dark,
      mistyWhite = _ref.mistyWhite,
      milkyWhite = _ref.milkyWhite,
      error = _ref.error,
      clear = _ref.clear,
      facebook = _ref.facebook,
      transparent = _ref.transparent,
      silver = _ref.silver,
      steel = _ref.steel,
      ricePaper = _ref.ricePaper,
      frost = _ref.frost,
      cloud = _ref.cloud,
      windowTint = _ref.windowTint,
      panther = _ref.panther,
      charcoal = _ref.charcoal,
      coal = _ref.coal,
      bloodOrange = _ref.bloodOrange,
      snow = _ref.snow,
      ember = _ref.ember,
      fire = _ref.fire,
      drawer = _ref.drawer,
      eggplant = _ref.eggplant,
      twitterColor = _ref.twitterColor,
      facebookColor = _ref.facebookColor,
      googleColor = _ref.googleColor,
      linkedinColor = _ref.linkedinColor,
      pinterestColor = _ref.pinterestColor,
      youtubeColor = _ref.youtubeColor,
      tumblrColor = _ref.tumblrColor,
      behanceColor = _ref.behanceColor,
      dribbbleColor = _ref.dribbbleColor,
      redditColor = _ref.redditColor,
      instagramColor = _ref.instagramColor,
      success = _ref.success,
      info = _ref.info,
      rose = _ref.rose,
      warning = _ref.warning,
      danger = _ref.danger,
      style = _ref.style,
      classes = _ref.classes,
      cropped = _ref.cropped,
      otherprops = _objectWithoutProperties(_ref, ["lines", "lineHeight", "h1", "h2", "h3", "h4", "h5", "h6", "title", "subTitle", "header", "subHeader", "body", "caption", "small", "tiny", "size", "transform", "button", "regular", "bold", "normal", "semibold", "medium", "weight", "light", "center", "right", "spacing", "height", "noWrap", "fullWidth", "color", "accent", "primary", "secondary", "tertiary", "black", "white", "gray", "gray2", "dark", "mistyWhite", "milkyWhite", "error", "clear", "facebook", "transparent", "silver", "steel", "ricePaper", "frost", "cloud", "windowTint", "panther", "charcoal", "coal", "bloodOrange", "snow", "ember", "fire", "drawer", "eggplant", "twitterColor", "facebookColor", "googleColor", "linkedinColor", "pinterestColor", "youtubeColor", "tumblrColor", "behanceColor", "dribbbleColor", "redditColor", "instagramColor", "success", "info", "rose", "warning", "danger", "style", "classes", "cropped"]);

  var textStyles = _renderer.StyleSheet.create(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, styles.text), lines && {
    maxLines: lines
  }), lineHeight && {
    lineHeight: lineHeight
  }), h1 && styles.h1), h2 && styles.h2), h3 && styles.h3), h4 && styles.h4), h5 && styles.h5), h6 && styles.h6), title && styles.title), subTitle && styles.subTitle), header && styles.header), subHeader && styles.subHeader), body && styles.body), caption && styles.caption), small && styles.small), tiny && styles.tiny), size && {
    fontSize: size
  }), transform && {
    textTransform: transform
  }), height && {
    lineHeight: height
  }), noWrap && {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }), fullWidth && {
    minWidth: '100%'
  }), spacing && {
    letterSpacing: spacing
  }), weight && {
    fontWeight: weight
  }), regular && styles.regular), bold && styles.bold), semibold && styles.semibold), medium && styles.medium), light && styles.light), normal && styles.normal), center && styles.center), right && styles.right), color && styles[color]), color && !styles[color] && {
    color: color
  }), accent && styles.accent), primary && styles.primary), secondary && styles.secondary), tertiary && styles.tertiary), black && styles.black), white && styles.white), gray && styles.gray), gray2 && styles.gray2), dark && styles.dark), error && styles.error), mistyWhite && styles.mistyWhite), milkyWhite && styles.milkyWhite), clear && styles.clear), facebook && styles.facebook), transparent && styles.transparent), silver && styles.silver), steel && styles.steel), error && styles.error), ricePaper && styles.ricePaper), frost && styles.frost), cloud && styles.cloud), windowTint && styles.windowTint), panther && styles.panther), charcoal && styles.charcoal), coal && styles.coal), bloodOrange && styles.bloodOrange), snow && styles.snow), ember && styles.ember), fire && styles.fire), drawer && styles.drawer), eggplant && styles.eggplant), twitterColor && styles.twitterColor), facebookColor && styles.facebookColor), googleColor && styles.googleColor), linkedinColor && styles.linkedinColor), pinterestColor && styles.pinterestColor), youtubeColor && styles.youtubeColor), tumblrColor && styles.tumblrColor), behanceColor && styles.behanceColor), dribbbleColor && styles.dribbbleColor), redditColor && styles.redditColor), instagramColor && styles.instagramColor), success && styles.success), info && styles.info), rose && styles.rose), warning && styles.warning), danger && styles.danger), style));

  return {
    textStyles: textStyles,
    otherprops: otherprops
  };
};

var _default = useTextStyles;
exports.default = _default;