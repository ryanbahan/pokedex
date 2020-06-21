import PokemonCard from '../pokemonCard/pokemonCard'
import { useContext } from 'react'
import { PokemonContext } from '../../contexts/pokemonContext'

const CardContainer = () => {
    const PokemonStore = useContext(PokemonContext)

    const { pokemon } = PokemonStore.state

    return (
        <main>
            {pokemon.map(p => (
                <PokemonCard key={p.id} {...p} />
            ))}
        </main>
    )
}

export default CardContainer