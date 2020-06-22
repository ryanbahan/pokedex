import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import PokemonProvider from '../../contexts/pokemonContext'
import SearchFilterProvider from '../../contexts/searchFilterContext'
import SearchForm from './searchForm'
import { data } from '../../testData'

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
                <SearchForm />
            </SearchFilterProvider>
        </PokemonProvider>
    )

    return { ...utils }
}

test('it fetches pokemon data to display', async () => {
    renderPlaylistsContainer()

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1))
})

test('it displays the appropriate content', async () => {
    renderPlaylistsContainer()

    const clearFiltersBtn = screen.getByText("clear filters")
    const weaknessesBtn = screen.getByText("weaknesses▼")
    const typeBtn = screen.getByText("type▼")
    const input = screen.getByPlaceholderText("Search by name...")

    expect(clearFiltersBtn).toBeInTheDocument()
    expect(weaknessesBtn).toBeInTheDocument()
    expect(typeBtn).toBeInTheDocument()
    expect(input).toBeInTheDocument()
})