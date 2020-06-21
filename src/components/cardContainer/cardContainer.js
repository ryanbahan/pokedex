import PokemonCard from '../pokemonCard/pokemonCard'
import { useContext } from 'react'
import { PokemonContext } from '../../contexts/pokemonContext'
import styled from 'styled-components'

const CardContainer = () => {
    const PokemonStore = useContext(PokemonContext)

    const { pokemon } = PokemonStore.state

    return (
        <Main>
            {pokemon.map(p => (
                <PokemonCard key={p.id} {...p} />
            ))}
        </Main>
    )
}

const Main = styled.main`
    border: solid 1px blue;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

export default CardContainer