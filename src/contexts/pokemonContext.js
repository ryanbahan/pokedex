import { createContext, useEffect, useState } from 'react';
import { fetchPokemon } from '../api'

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
    const [state, setState] = useState({ pokemon: [] })

    const setPokemon = async () => {
        const pokemon = await fetchPokemon()
        setState({ pokemon: pokemon })
    }

    useEffect(() => {
        setPokemon()
    });

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
