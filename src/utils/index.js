export const arrayToString = (arr) => {
    if (arr.length === 1) {
        return arr[0]
    } else {
        return arr.join(', ')
    }
} 

export const getFilterItems = (data, key) => {
    return data.reduce((list, pokemon) => {
        list = list.concat(pokemon[key])
        return [...new Set(list)]
    }, [])
}

export const filterPokemon = (searchField, filterObj, allPokemon) => {
    return allPokemon.reduce((list, pokemon) => {
        const hasText = filterByText(searchField, pokemon)
        const hasType = filterByValue(filterObj.type, pokemon.type)
        const hasWeaknesses = filterByValue(filterObj.weaknesses, pokemon.weaknesses)

        if (hasText && hasType && hasWeaknesses) {
            list.push(pokemon)
        }

        return list
    }, [])
}

const filterByText = (searchField, pokemon) => {
    let query = new RegExp(searchField, "gi")

    return pokemon.name.match(query)
}

const filterByValue = (filters, types) => {
    let hasValues = true

    filters.forEach(filter => {
        if (!types.find(type => type === filter)) {
            hasValues = false
        }
    })

    return filters.length === 0 ? true : hasValues
}