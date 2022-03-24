import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { theme } from '@/themes/styles';

const { primary, neutral } = theme.color;

const muiTheme = createTheme({
  palette: {
    primary: {
      main: primary.default,
    },
    neutral: {
      main: neutral.gray2,
    },
    error: {
      main: red.A400,
    },
  },
});

export default muiTheme;
