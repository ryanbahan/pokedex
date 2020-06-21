import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body,
  html {
    height: 100%;
  }
`

export default GlobalStyles