import { data } from '../testData'
import { fetchPokemon } from '../api'

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ pokemon: data }),
    })
)

beforeEach(() => {
    fetch.mockClear();
})

it("fetches the pokemon data", async () => {
    const pokemon = await fetchPokemon()  
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(pokemon.length).toBe(151)
})