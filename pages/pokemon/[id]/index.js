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
                    <Num>{pokemon.num}</Num>
                    <img src={pokemon.img} />
                    <Name>{pokemon.name}</Name>
                    <P>{arrayToString(pokemon.type)}</P>
                    <P>weaknesses: {arrayToString(pokemon.weaknesses)}</P>
                    <P>height: {pokemon.height}</P>
                    <P>weight: {pokemon.weight}</P>
                    <Evolutions>other evolutions:</Evolutions>
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
    background: ${({ theme }) => theme.colors.grayLightest};
`

const Name = styled.h2`
    font-weight: 500;
    margin: ${({ theme }) => theme.spacers.xs};
`

const P = styled.p`
    margin: 0.25rem 0;
`

const Evolutions = styled.h3`
    margin: 0.75rem 0;
`

const Num = styled.span`
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border-top-left-radius: ${({ theme }) => theme.styles.borderRadius};
    border-bottom-right-radius: ${({ theme }) => theme.styles.borderRadius};
    position: absolute;
    padding: ${({ theme }) => theme.spacers.xxs};
    top: 0;
    left: 0;
    font-size: 1.5rem;
`

const Card = styled.section`
    width: 35vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 2.5rem;
    border: solid 1px ${({ theme }) => theme.colors.grayLighter};
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.styles.boxShadow};
`

const Button = styled.button`
    font-size: 1.25rem;
    width: 15rem;
    cursor: pointer;
    margin: 0.25rem 0;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    border: solid 0.5px ${({ theme }) => theme.colors.grayLight};
    padding: ${({ theme }) => theme.spacers.xxs} ${({ theme }) => theme.spacers.xs};
`

export default Pokemon