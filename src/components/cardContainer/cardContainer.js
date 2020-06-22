import PokemonCard from '../pokemonCard/pokemonCard'
import { useContext } from 'react'
import { filterPokemon } from '../../utils'
import { PokemonContext } from '../../contexts/pokemonContext'
import { SearchFilterContext } from '../../contexts/searchFilterContext'
import styled from 'styled-components'

const CardContainer = () => {
    const SearchFilterStore = useContext(SearchFilterContext)
    const PokemonStore = useContext(PokemonContext)

    const { pokemon } = PokemonStore.state
    const { searchField, filters } = SearchFilterStore.state

    const displayPokemon = () => {
        const filteredPokemon = filterPokemon(searchField, filters, pokemon)
        return filteredPokemon.map(p => <PokemonCard key={p.id} {...p} />)
    }

    return (
        <Main>
            {displayPokemon()}
        </Main>
    )
}

const Main = styled.main`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`

export default CardContainer