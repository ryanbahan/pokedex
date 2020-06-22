export const arrayToString = (arr) => {
    if (arr.length === 1) {
        return arr[0]
    } else {
        return arr.join(', ')
    }
}

export const filterPokemon = (searchField, filterObj, allPokemon) => {
    return allPokemon.reduce((arr, pokemon) => {
        const hasText = filterByText(searchField, pokemon, "name")
        const hasType = filterByValues(filterObj.type, pokemon.type)
        const hasWeaknesses = filterByValues(filterObj.weaknesses, pokemon.weaknesses)

        if (hasText && hasType && hasWeaknesses) {
            arr.push(pokemon)
        }

        return arr
    }, [])
}

const filterByText = (searchText, data, key) => {
    let query = new RegExp(searchText, "gi")

    if (key) {
        return data[key].match(query)
    } else {
        return data.match(query)
    }
}

const filterByValues = (filters, types) => {
    let hasValues = true

    filters.forEach(filter => {
        if (!types.find(type => type === filter)) {
            hasValues = false
        }
    })

    return filters.length === 0 ? true : hasValues
}

export const getFilterItems = (data, key) => {
    return data.reduce((list, pokemon) => {
        list = list.concat(pokemon[key])
        return [...new Set(list)]
    }, [])
}