import { createTheme, ThemeProvider } from '@mui/material/styles';

export const Theme = createTheme({
  palette: {
    primary: {
        light: '#DEDEDE',
        main: '#305263',
        dark: '#357a38',
        contrastText: '#fff',
    },
    secondary: {
        light: '#6fbf73',
        main: 'rgb(201, 167, 150)',
        dark: '#357a38',
        contrastText: '#fff',
    },
    background: {
      default: '#69a1fa'
    }
}});