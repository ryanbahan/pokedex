import { createContext, useEffect, useState } from 'react';
import { fetchPokemon } from '../api'

export const PokemonContext = createContext()

const PokemonProvider = ({ children }) => {
    const [state, setState] = useState({ pokemon: [] })

    useEffect(() => {
        setPokemon();
    }, [])

    const setPokemon = async () => {
        const pokemon = await fetchPokemon()
        setState({ pokemon: pokemon })
    }

    return (
        <PokemonContext.Provider
            value={{
                state
            }}
        >
            {children}
        </PokemonContext.Provider>
    );
}

export default PokemonProvider
