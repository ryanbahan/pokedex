import { createContext, useState } from 'react'

export const SearchFilterContext = createContext()

const SearchFilterProvider = ({ children }) => {
    const [state, setState] = useState({ searchField: "", filters: {Type: [], Weaknesses: []}})

    const updateText = (val) => {
        setState({ ...state, searchField: val })
    }

    const updateFilters = (val, title) => {
        if (state.filters[title].find(filter => filter === val)) {
            const updatedFilters = state.filters[title].filter(item => item !== val)
            setState({...state, filters: updatedFilters})
        } else {
            setState({
                ...state, 
                filters: {...state.filters, [title]: [...state.filters[title], val]}
            })
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
