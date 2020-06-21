export const arrayToString = (arr) => {
    if (arr.length === 1) {
        return arr[0]
    } else {
        return arr.join(', ')
    }
} 

export const filterPokemon = (searchField, filters, pokemon) => {
    const filteredByText = filterByText(searchField, pokemon)

    return filteredByText
}

export const getFilterItems = (data, key) => {
    return data.reduce((list, pokemon) => {
        list = list.concat(pokemon[key])
        return [...new Set(list)]
    }, [])
}

const filterByText = (searchField, pokemon) => {
    let query = new RegExp(searchField, "gi")

    return pokemon.filter(p => {
        return (
            p.name.match(query)
        )
    })
}