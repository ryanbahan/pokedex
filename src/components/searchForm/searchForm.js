import styled from 'styled-components'
import { useState, useContext } from 'react'
import { SearchFilterContext } from '../../contexts/searchFilterContext'

const SearchForm = () => {
    const SearchFilterStore = useContext(SearchFilterContext)
    const { searchField } = SearchFilterStore.state 

    return (
        <Form>
            <Input
                type="text"
                value={ searchField }
                onChange={(e) => SearchFilterStore.update({ searchField: e.target.value })}
                placeholder="Search by name..."
            />
            <FiltersContainer>
                <Button type="button">Type ▼</Button>
                <Button type="button">Weaknesses ▼</Button>
                <Button type="button">Clear filters</Button>
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