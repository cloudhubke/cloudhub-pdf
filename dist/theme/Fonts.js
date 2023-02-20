"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Sizes = _interopRequireDefault(require("./Sizes"));

var _Colors = _interopRequireDefault(require("./Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fonts = {
  h1: {
    // fontFamily: 'Lato',
    fontSize: _Sizes.default.h1,
    lineHeight: '150%',
    fontWeight: 400
  },
  h2: {
    // fontFamily: 'Lato',
    fontSize: _Sizes.default.h2,
    lineHeight: '150%',
    fontWeight: 400
  },
  h3: {
    // fontFamily: 'Lato',
    fontSize: _Sizes.default.h3,
    lineHeight: '150%',
    fontWeight: 400
  },
  h4: {
    // fontFamily: 'Lato',
    fontSize: _Sizes.default.h4,
    lineHeight: '150%',
    fontWeight: 400
  },
  h5: {
    // fontFamily: 'Lato',
    fontSize: _Sizes.default.h5,
    lineHeight: '150%',
    fontWeight: 400
  },
  h6: {
    // fontFamily: 'Lato',
    fontSize: _Sizes.default.h6,
    lineHeight: '150%',
    fontWeight: 400
  },
  header: {
    // fontFamily: 'Lato',
    fontSize: _Sizes.default.header,
    lineHeight: '150%',
    letterSpacing: 0.5,
    color: _Colors.default.black,
    fontWeight: 500
  },
  subHeader: {
    // fontFamily: 'Lato',
    fontSize: _Sizes.default.subHeader,
    lineHeight: '150%',
    letterSpacing: 0.5,
    color: _Colors.default.black,
    fontWeight: 400
  },
  title: {
    // fontFamily: 'Lato',
    fontSize: _Sizes.default.title,
    lineHeight: '150%',
    letterSpacing: 0.5,
    color: _Colors.default.black,
    fontWeight: 500
  },
  subTitle: {
    // fontFamily: 'Lato',
    fontSize: _Sizes.default.subTitle,
    lineHeight: '150%',
    letterSpacing: 0.5,
    fontWeight: 400,
    color: _Colors.default.black
  },
  semibold: {
    // fontFamily: 'Lato',
    fontWeight: 500
  },
  bold: {
    // fontFamily: 'Lato',
    fontWeight: 700
  },
  black: {
    // fontFamily: 'Lato',
    fontWeight: 900
  },
  light: {
    // fontFamily: 'Lato',
    fontWeight: 300
  },
  normal: {
    // fontFamily: 'Lato',
    fontWeight: 400
  },
  default: {
    // fontFamily: 'Lato',
    fontSize: _Sizes.default.body,
    fontWeight: 400
  },
  body: {
    // fontFamily: 'Lato',
    fontSize: _Sizes.default.body,
    lineHeight: '200%',
    color: _Colors.default.darkGray,
    fontWeight: 400
  },
  caption: {
    fontSize: _Sizes.default.caption,
    fontWeight: 300
  },
  small: {
    fontSize: _Sizes.default.small,
    lineHeight: '200%',
    color: _Colors.default.darkGray,
    fontWeight: 300
  },
  button: {
    fontSize: _Sizes.default.button,
    color: _Colors.default.white,
    fontWeight: 400
  }
};
var _default = Fonts;
exports.default = _default;