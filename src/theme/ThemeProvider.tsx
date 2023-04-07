
import { teal } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { dark } from '@mui/material/styles/createPalette';

type ThemeProps = {
    children:React.ReactNode;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#1f2328',
      light: '#4b4f53',
      dark: '#15181',
    },
    secondary:{
      main: '#1f883d',
      light: '#4b9f63',
      dark:   '#155f2a'
    }
  },
});

export function Theme({children}: ThemeProps) {
  return <ThemeProvider theme={theme}>


  </ThemeProvider>;
}
