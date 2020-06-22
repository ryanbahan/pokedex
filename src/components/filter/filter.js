import { useState, useContext } from 'react'
import { SearchFilterContext } from '../../contexts/searchFilterContext'
import styled from 'styled-components'

const Filter = ({ title, items }) => {
    const [ dropdown, toggleDropdown ] = useState(false)
    const SearchFilterStore = useContext(SearchFilterContext)

    const renderListItems = (items) => {
        return items.map(item => (
            <DropdownItem key={item}>
                <input
                    type="checkbox"
                    onClick={() => SearchFilterStore.updateFilters(item, title)}
                    defaultChecked={SearchFilterStore.checkIfFiltered(item, title)}
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
                {title + "▼"}
            </Button>
            {dropdown && displayList(items)}
        </DropdownContainer>
    )
}

const Button = styled.button`
    font-size: 1.25rem;
    margin-left: 0.5rem;
    cursor: pointer;
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
    border: solid 0.5px rgba(0,0,0,0.25);
    border-radius: 0.25rem;
    padding: 0.5rem;
`

export default Filter