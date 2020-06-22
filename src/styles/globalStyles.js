import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.grayLightest};
  }

  body,
  html {
    height: 100%;
  }
`

export default GlobalStyles