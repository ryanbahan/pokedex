import styled from 'styled-components'
import { useContext } from 'react'
import Filter from '../filter/filter'
import { getFilterItems } from '../../utils'
import { SearchFilterContext } from '../../contexts/searchFilterContext'
import { PokemonContext } from '../../contexts/pokemonContext'

const SearchForm = () => {
    const SearchFilterStore = useContext(SearchFilterContext)
    const PokemonStore = useContext(PokemonContext)
    const { searchField } = SearchFilterStore.state 

    const { pokemon } = PokemonStore.state

    return (
        <Form>
            <Input
                type="text"
                value={ searchField }
                onChange={(e) => SearchFilterStore.updateText(e.target.value)}
                placeholder="Search by name..."
            />
            <FiltersContainer>
                <Filter title={"type"} items={getFilterItems(pokemon, "type")} />
                <Filter title={"weaknesses"} items={getFilterItems(pokemon, "weaknesses")} />
                <Button type="button">clear filters</Button>
            </FiltersContainer>
        </Form>
    )
}

const Input = styled.input`
    font-size: 1.5rem;
    width: 50%;
    min-width: 15rem;
`

const Button = styled.button`
    font-size: 1.25rem;
    margin-left: 0.5rem;
    cursor: pointer;
`

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2.5rem 0;
    flex-wrap: wrap;
`

const FiltersContainer = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
`

export default SearchForm