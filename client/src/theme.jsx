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
    <GlobalStyles
      styles={{
        body: {
          background:
            'hsla(173, 90%, 72%, 1) linear-gradient(360deg, hsla(173, 90%, 72%, 1) 0%, hsla(100, 100%, 31%, 1) 100%)',
          background:
            '-moz-linear-gradient(360deg, hsla(173, 90%, 72%, 1) 0%, hsla(100, 100%, 31%, 1) 100%)',
          background:
            '-webkit-linear-gradient(360deg, hsla(173, 90%, 72%, 1) 0%, hsla(100, 100%, 31%, 1) 100%)',
          filter:
            'progid:DXImageTransform.Microsoft.gradient(startColorstr="#77F8E9", endColorstr="#35A000", GradientType=1)',
        },
      }}
    />

    {children}
  </MUIThemeProvider>
)

export default ThemeProvider
