import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import { PokemonContext } from '../../../src/contexts/pokemonContext'
import { useContext } from 'react'
import styled from 'styled-components'
import { arrayToString } from '../../../src/utils'

const Pokemon = () => {
    const router = useRouter()
    const { id } = router.query
    const PokemonStore = useContext(PokemonContext)
    const pokemon = PokemonStore.state.pokemon.find(p => p.num === id)

    const getLinks = (items) => {
        return items.map(item => (
            <Link href={"/pokemon/" + item.num} key={item.num}>
                <Button>
                    {item.name}
                </Button>
            </Link>
        ))
    }

    if (pokemon) {
        return (
            <Container>
                <Head>
                    <title>Pokedex</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Card>
                    <h1>name: {pokemon.name}</h1>
                    <h1>num: {pokemon.num}</h1>
                    <img src={pokemon.img} />
                    <p>type: {arrayToString(pokemon.type)}</p>
                    <p>weaknesses: {arrayToString(pokemon.weaknesses)}</p>
                    <p>height: {pokemon.height}</p>
                    <p>weight: {pokemon.weight}</p>
                    <p>other evolutions:</p>
                    {pokemon.prev_evolution && getLinks(pokemon.prev_evolution)}
                    {pokemon.next_evolution && getLinks(pokemon.next_evolution)}
                </Card>
            </Container>
        )
    } else {
        return null
    }
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Card = styled.section`
    border: solid 1px black;
    width: 35vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Button = styled.button`
    width: 10rem;
`

export default Pokemon