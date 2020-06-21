import PokemonProvider from '../src/contexts/pokemonContext'
import SearchFilterProvider from '../src/contexts/searchFilterContext'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/globalStyles'
import theme from '../src/styles/theme'

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

export default MyApp