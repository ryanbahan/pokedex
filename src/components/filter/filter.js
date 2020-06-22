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
            <>
                <Overlay onClick={() => toggleDropdown(false)} />
                    <Dropdown>
                        {listItems} 
                    </Dropdown>
            </>
        )
    }


    return (
        <DropdownContainer>
            <Button
                type="button"
                onClick={() => toggleDropdown(!dropdown)}
            >
                {title}<Span>▼</Span>
            </Button>
            {dropdown && displayList(items)}
        </DropdownContainer>
    )
}

const Button = styled.button`
    background: ${({ theme }) => theme.colors.secondary};
    border: solid 0.5px ${({ theme }) => theme.colors.grayLight};
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    color: ${({ theme }) => theme.colors.white};
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

const Dropdown = styled.div`
    background: ${({ theme }) => theme.colors.white};
    border: solid 1px ${({ theme }) => theme.colors.grayLighter};
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    box-shadow: ${({ theme }) => theme.styles.boxShadow};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    position: absolute;
    padding: 0.5rem;
    z-index: 2;
`

const DropdownContainer = styled.section`
    flex-wrap: wrap;
`

const DropdownItem = styled.div`
    align-items: baseline;
    display: flex;
    padding: 0.5rem;
`

const Input = styled.input`
    margin: ${({ theme }) => theme.spacers.xxs};
`

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
`

const Span = styled.span`
    font-size: 0.5rem;
    padding-left: 0.5rem;
`

export default Filter