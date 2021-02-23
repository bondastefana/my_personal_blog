import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { CssBaseline } from '@material-ui/core'
import reportWebVitals from './reportWebVitals'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Consolas from './assets/fonts/Consolas.ttf'
import Poppins from './assets/fonts/Poppins.ttf'

// import poppins from 'typeface-poppins'

const consolas = {
  fontFamily: 'Consolas',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '600',
  src: `local('Consolas'),
  url(${Consolas}) format('ttf')`,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}

const poppins = {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '600',
  src: `local('Poppins'),
  url(${Poppins}) format('ttf')`,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8eaebd',
    },
    secondary: {
      main: '#d5d5d5',
    },
    type: 'dark',
    background: {
      default: '#1D2731',
    },
  },
  typography: {
    fontFamily: 'Consolas',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [consolas],
      },
    },
  },
})
console.log(theme)

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
