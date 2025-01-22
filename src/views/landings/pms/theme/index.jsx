'use client';
import PropTypes from 'prop-types';

import { useMemo } from 'react';

// @mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// @project
import palette from './palette';
import componentsOverride from './overrides';
import typography from './typography';

import useConfig from '@/hooks/useConfig';

// @types

/*************************** PMS THEME - MAIN ***************************/

export default function ThemeCustomization({ children }) {
  const { mode, themeDirection } = useConfig();

  const themePalette = useMemo(() => palette(mode), [mode]);

  let themeDefault = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 1024,
        lg: 1266,
        xl: 1440
      }
    },
    direction: themeDirection,
    palette: themePalette
  });

  // create duplicate theme due to responsive typography and fontFamily
  let theme = createTheme({
    ...themeDefault,
    typography: typography(themeDefault)
  });

  theme.components = componentsOverride(theme);

  return (
    <ThemeProvider {...{ theme }}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}

ThemeCustomization.propTypes = { children: PropTypes.any };
