export const fetchPokemon = async () => {
    const res = await fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
    const json = await res.json()

    return json.pokemon
}