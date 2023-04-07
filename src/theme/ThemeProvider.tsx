
import { teal } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

type ThemeProps = {
    children:React.ReactNode;
}

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
  },
});

export function Theme({children}: ThemeProps) {
  return <ThemeProvider theme={theme}>


  </ThemeProvider>;
}
