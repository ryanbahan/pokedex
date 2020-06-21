import PokemonProvider from '../src/contexts/pokemonContext'

function MyApp({ Component, pageProps }) {
    return (
        <PokemonProvider>
            <Component {...pageProps} />
        </PokemonProvider>
    )
}

export default MyApp