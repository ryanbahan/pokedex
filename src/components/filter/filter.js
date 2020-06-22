import { useState, useContext } from 'react'
import { SearchFilterContext } from '../../contexts/searchFilterContext'
import styled from 'styled-components'

const Filter = ({ title, items }) => {
    const [ dropdown, toggleDropdown ] = useState(false)
    const SearchFilterStore = useContext(SearchFilterContext)
    const { updateFilters, checkIfFiltered } = SearchFilterStore

    const renderListItems = (items) => {
        return items.map(item => (
            <DropdownItem key={item}>
                <Input
                    type="checkbox"
                    onClick={() => updateFilters(item, title)}
                    defaultChecked={checkIfFiltered(item, title)}
                />
                <p id={item}>{item}</p>
            </DropdownItem>
        ))
    }

    const displayList = (items) => {
        const listItems = renderListItems(items)

        return (
            <Dropdown>
                {listItems} 
            </Dropdown>
        )
    }


    return (
        <DropdownContainer>
            <Button
                type="button"
                onClick={() => toggleDropdown(!dropdown)}
            >
                { title }
            </Button>
            {dropdown && displayList(items)}
        </DropdownContainer>
    )
}

const Button = styled.button`
    font-size: 1.25rem;
    margin-left: 0.5rem;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    border: solid 0.5px ${({ theme }) => theme.colors.grayLight};
    padding: ${({ theme }) => theme.spacers.xxs} ${({ theme }) => theme.spacers.xs};
`

const Input = styled.input`
    margin: ${({ theme }) => theme.spacers.xxs};
`

const DropdownContainer = styled.section`
    flex-wrap: wrap;
`

const DropdownItem = styled.div`
    display: flex;
    align-items: baseline;
    padding: 0.5rem;
`

const Dropdown = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    position: absolute;
    background-color: #fff;
    border: solid 1px ${({ theme }) => theme.colors.grayLighter};
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.styles.boxShadow};
    padding: 0.5rem;
    z-index: 2;
`

export default Filter