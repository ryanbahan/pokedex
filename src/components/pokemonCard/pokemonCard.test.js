import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { data } from '../../testData';
import PokemonCard from './pokemonCard';

afterEach(cleanup)

function renderPlaylistsContainer(props) {
    const utils = render(<PokemonCard {...props} />)

    return { ...utils }
}

test('it displays the appropriate content', async () => {
    renderPlaylistsContainer(data[1])

    const ivysaur = screen.getByText('name: Ivysaur')
    const ivysaurNum = screen.getByText('number: 002')
    const ivysaurType = screen.getAllByText('type: Grass, Poison')[0]
    const ivysaurWeaknesses = screen.getAllByText('weaknesses: Fire, Ice, Flying, Psychic')[0]

    expect(ivysaur).toBeInTheDocument()
    expect(ivysaurNum).toBeInTheDocument()
    expect(ivysaurType).toBeInTheDocument()
    expect(ivysaurWeaknesses).toBeInTheDocument()
})