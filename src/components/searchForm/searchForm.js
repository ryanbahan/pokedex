import styled from 'styled-components'
import { useContext } from 'react'
import Filter from '../filter/filter'
import { SearchFilterContext } from '../../contexts/searchFilterContext'
import { PokemonContext } from '../../contexts/pokemonContext'
import { getFilterItems } from '../../utils'

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
                <Button type="button" onClick={SearchFilterStore.clearFilters}>clear filters</Button>
            </FiltersContainer>
        </Form>
    )
}

const Button = styled.button`
    border: solid 0.5px ${({ theme }) => theme.colors.grayLight};
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    cursor: pointer;
    font-size: 1rem;
    text-transform: capitalize;
    font-weight: 400;
    margin-left: 0.5rem;
    height: 2.5rem;
    padding: ${({ theme }) => theme.spacers.xxs} ${({ theme }) => theme.spacers.xs};

    @media (max-width: 650px) {
        margin-left: 0;
    }
`

const FiltersContainer = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;

    @media (max-width: 1100px) {
        width: 100%;
        margin-top: 1.5rem;
    }

    @media (max-width: 650px) {
        justify-content: space-between;
    }
`

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2.5rem 0;
    flex-wrap: wrap;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 0.5rem;
    width: 50%;
    min-width: 15rem;

    @media (max-width: 1100px) {
        width: 100%;
    }
`

export default SearchForm