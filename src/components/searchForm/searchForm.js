import styled from 'styled-components'
import { useState } from 'react'

const SearchForm = () => {
    const [ state, setState ] = useState({text: ""})
    return (
        <Form>
            <Input
                type="text"
                value={ state.text }
                onChange={(e) => setState({text: e.target.value})}
                id="searchText"
                placeholder="Search by name..."
            />
            <FiltersContainer>
                <Button type="button">Type</Button>
                <Button type="button">Weaknesses</Button>
                <Button type="button">Clear filters</Button>
            </FiltersContainer>
        </Form>
    )
}

const Input = styled.input`
    font-size: 1.5rem;
    width: 50%;
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
`

const FiltersContainer = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
`

export default SearchForm