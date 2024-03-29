import React from 'react';
import PdfThemeContext from './PdfThemeContext';
import defaultcolors from './Colors';
import defaultsizes from './Sizes';
import defaultfonts from './Fonts';

const PdfThemeProvider = ({
  children,
  fonts = defaultfonts,
  colors = defaultcolors,
  sizes = defaultsizes,
  ...props
}: {
  children?: any;
  fonts?: any;
  colors?: any;
  sizes?: any;
  [key: string]: any;
}) => {
  return (
    <PdfThemeContext.Provider value={{ fonts, colors, sizes, ...props }}>
      {children}
    </PdfThemeContext.Provider>
  );
};

export default PdfThemeProvider;
