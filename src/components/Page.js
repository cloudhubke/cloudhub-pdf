import React from 'react';
import { Page as PdfPage, StyleSheet } from '@react-pdf/renderer';
import { colors } from '../theme';

// Create Document Component
const Page = ({ style, color, ...props }) => {
  const pageStyles = StyleSheet.create({
    ...(color && styles[color]), // predefined styles colors for backgroundColor
    ...(color && !styles[color] && { backgroundColor: color }), // custom backgroundColor
    ...style // rewrite predefined styles
  });

  return <PdfPage style={pageStyles} {...props} />;
};

Page.defaultProps = {
  size: 'A4'
};

const styles = {
  accent: { backgroundColor: colors.accent },
  primary: { backgroundColor: colors.primary },
  secondary: { backgroundColor: colors.secondary },
  tertiary: { backgroundColor: colors.tertiary },
  black: { backgroundColor: colors.black },
  white: { backgroundColor: colors.white },
  gray: { backgroundColor: colors.gray },
  gray2: { backgroundColor: colors.gray2 },
  gray3: { backgroundColor: colors.gray3 },
  gray4: { backgroundColor: colors.gray4 },
  dark: { backgroundColor: colors.dark },
  mistyWhite: { backgroundColor: colors.mistyWhite },
  milkyWhite: { backgroundColor: colors.milkyWhite },
  error: { backgroundColor: colors.error },
  clear: { backgroundColor: colors.clear },
  facebook: { backgroundColor: colors.facebook },
  transparent: { backgroundColor: colors.transparent },
  silver: { backgroundColor: colors.silver },
  steel: { backgroundColor: colors.steel },
  ricePaper: { backgroundColor: colors.ricePaper },
  frost: { backgroundColor: colors.frost },
  cloud: { backgroundColor: colors.cloud },
  windowTint: { backgroundColor: colors.windowTint },
  panther: { backgroundColor: colors.panther },
  charcoal: { backgroundColor: colors.charcoal },
  coal: { backgroundColor: colors.coal },
  bloodOrange: { backgroundColor: colors.bloodOrange },
  snow: { backgroundColor: colors.snow },
  ember: { backgroundColor: colors.ember },
  fire: { backgroundColor: colors.fire },
  drawer: { backgroundColor: colors.drawer },
  eggplant: { backgroundColor: colors.eggplant },

  twitterColor: { backgroundColor: colors.twitterColor },
  facebookColor: { backgroundColor: colors.twitterColor },
  googleColor: { backgroundColor: colors.twitterColor },
  linkedinColor: { backgroundColor: colors.twitterColor },
  pinterestColor: { backgroundColor: colors.twitterColor },
  youtubeColor: { backgroundColor: colors.twitterColor },
  tumblrColor: { backgroundColor: colors.twitterColor },
  behanceColor: { backgroundColor: colors.twitterColor },
  dribbbleColor: { backgroundColor: colors.twitterColor },
  redditColor: { backgroundColor: colors.twitterColor },
  instagramColor: { backgroundColor: colors.twitterColor },
  success: { backgroundColor: colors.success },
  info: { backgroundColor: colors.info },
  rose: { backgroundColor: colors.rose },
  warning: { backgroundColor: colors.warning },
  danger: { backgroundColor: colors.danger }
};

export default Page;
