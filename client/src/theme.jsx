import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles'
import { GlobalStyles } from '@mui/material'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#242424',
    },
    secondary: {
      main: '#2a3f92',
    },
    terciary: {
      main: '#48cae4',
    },
    error: {
      main: '#d00000',
    },
    warning: {
      main: '#ba181b',
    },
    success: {
      main: '#55a630',
    },
  },

  typography: {
    h2: {
      fontSize: '2.5rem',
    },
  },
})

const ThemeProvider = ({ children }) => (
  <MUIThemeProvider theme={theme}>
    <GlobalStyles styles={{ body: { backgroundColor: '#FFB4CB' } }} />

    {children}
  </MUIThemeProvider>
)

export default ThemeProvider
