import React from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import SearchFilterProvider from '../../contexts/searchFilterContext';
import { data } from '../../testData';
import Filter from './filter';
import { getFilterItems } from '../../utils'

afterEach(cleanup)

function renderPlaylistsContainer(title, items) {
    const utils = render(
        <SearchFilterProvider>
            <ThemeProvider theme={theme}>
                <Filter title={title} items={items} />
            </ThemeProvider>
        </SearchFilterProvider>
    )

    return { ...utils }
}

test('it displays the appropriate content', async () => {
    renderPlaylistsContainer("type", getFilterItems(data, "type"))

    const button = screen.getByText('type')
    expect(button).toBeInTheDocument()

    fireEvent.click(button)

    const grass = screen.getByText("Grass")
    const poison = screen.getByText("Poison")
    const fire = screen.getByText("Fire")
    const flying = screen.getByText("Flying")
    const water = screen.getByText("Water")
    const bug = screen.getByText("Bug")
    const normal = screen.getByText("Normal")
    const electric = screen.getByText("Electric")
    const ground = screen.getByText("Ground")
    const fighting = screen.getByText("Fighting")
    const psychic = screen.getByText("Psychic")
    const rock = screen.getByText("Rock")
    const ice = screen.getByText("Ice")
    const ghost = screen.getByText("Ghost")
    const dragon = screen.getByText("Dragon")

    expect(grass).toBeInTheDocument()
    expect(poison).toBeInTheDocument()
    expect(fire).toBeInTheDocument()
    expect(flying).toBeInTheDocument()
    expect(water).toBeInTheDocument()
    expect(bug).toBeInTheDocument()
    expect(normal).toBeInTheDocument()
    expect(electric).toBeInTheDocument()
    expect(ground).toBeInTheDocument()
    expect(fighting).toBeInTheDocument()
    expect(psychic).toBeInTheDocument()
    expect(rock).toBeInTheDocument()
    expect(ice).toBeInTheDocument()
    expect(ghost).toBeInTheDocument()
    expect(dragon).toBeInTheDocument()
})