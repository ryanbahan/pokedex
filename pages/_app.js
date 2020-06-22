import PokemonProvider from '../src/contexts/pokemonContext'
import SearchFilterProvider from '../src/contexts/searchFilterContext'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/globalStyles'
import theme from '../src/styles/theme'
import App from 'next/app'

function MyApp({ Component, pageProps }) {
    return (
        <PokemonProvider>
            <SearchFilterProvider>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <Component {...pageProps} />
                </ThemeProvider>
            </SearchFilterProvider>
        </PokemonProvider>
    )
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

export default MyApp