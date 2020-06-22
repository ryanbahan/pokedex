import { createContext, useState } from 'react'

export const SearchFilterContext = createContext()

const SearchFilterProvider = ({ children }) => {
    const [state, setState] = useState({ searchField: "", filters: {type: [], weaknesses: []}})

    const updateText = (val) => {
        setState({ ...state, searchField: val })
    }

    const updateFilters = (val, title) => {
        if (state.filters[title].find(filter => filter === val)) {
            const updatedFilter = state.filters[title].filter(item => item !== val)
            const filters = {...state.filters, [title]: updatedFilter}
            setState({...state, filters: filters})
        } else {
            const filters = {...state.filters, [title]: [...state.filters[title], val]}
            setState({...state, filters: filters })
        }
    }

    const checkIfFiltered = (val, title) => {
        if (state.filters[title].find(filter => filter === val)) {
            return true
        } else {
            return false
        }
    }

    return (
        <SearchFilterContext.Provider
            value={{
                state,
                updateText,
                updateFilters,
                checkIfFiltered,
            }}
        >
            {children}
        </SearchFilterContext.Provider>
    );
}

export default SearchFilterProvider
