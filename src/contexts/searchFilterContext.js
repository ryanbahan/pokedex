import { createContext, useState } from 'react'

export const SearchFilterContext = createContext()

const SearchFilterProvider = ({ children }) => {
    const [state, setState] = useState({ searchField: "", filters: []})

    const update = (val) => {
        setState({ ...state, ...val })
    }

    return (
        <SearchFilterContext.Provider
            value={{
                state,
                update,
            }}
        >
            {children}
        </SearchFilterContext.Provider>
    );
}

export default SearchFilterProvider
