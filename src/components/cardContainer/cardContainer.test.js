import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'
import PokemonProvider from '../../contexts/pokemonContext'
import SearchFilterProvider from '../../contexts/searchFilterContext'
import { data } from '../../testData'
import CardContainer from './cardContainer'

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ pokemon: data }),
    })
)

afterEach(cleanup)

function renderPlaylistsContainer() {
    const utils = render(
        <PokemonProvider>
            <SearchFilterProvider>
                <ThemeProvider theme={theme}>
                    <CardContainer />
                </ThemeProvider>
            </SearchFilterProvider>
        </PokemonProvider>
    )

    return { ...utils }
}

test('it fetches pokemon data to display', async () => {
    renderPlaylistsContainer()

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1))
})

test('it displays the appropriate pokemon content', async () => {
    renderPlaylistsContainer()

    const bulbasaur = await waitFor(() => screen.getByText('Bulbasaur')) 
    const bulbasaurNum = screen.getByText('001')
    const bulbasaurType = screen.getAllByText('Grass, Poison')[0]

    expect(bulbasaur).toBeInTheDocument()
    expect(bulbasaurNum).toBeInTheDocument()
    expect(bulbasaurType).toBeInTheDocument()
})