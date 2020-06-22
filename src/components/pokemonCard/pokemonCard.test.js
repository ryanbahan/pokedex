import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { data } from '../../testData'
import PokemonCard from './pokemonCard'

afterEach(cleanup)

function renderPlaylistsContainer(props) {
    const utils = render(
        <ThemeProvider theme={theme}>
            <PokemonCard {...props} />
        </ThemeProvider>
    )

    return { ...utils }
}

test('it displays the appropriate content', async () => {
    renderPlaylistsContainer(data[1])

    const ivysaur = screen.getByText('Ivysaur')
    const ivysaurNum = screen.getByText('002')
    const ivysaurType = screen.getAllByText('Grass, Poison')[0]

    expect(ivysaur).toBeInTheDocument()
    expect(ivysaurNum).toBeInTheDocument()
    expect(ivysaurType).toBeInTheDocument()
})