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
            <Link 
                href={"/pokemon?uri=" + item.num} 
                as={"/pokemon/" + item.num}
                key={item.num}
            >
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
                    <P><Span>type:</Span> {arrayToString(pokemon.type)}</P>
                    <P><Span>weaknesses:</Span> {arrayToString(pokemon.weaknesses)}</P>
                    <P><Span>height:</Span> {pokemon.height}</P>
                    <P><Span>weight:</Span> {pokemon.weight}</P>
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

const Button = styled.button`
    background: ${({ theme }) => theme.colors.secondary};
    border: solid 0.5px ${({ theme }) => theme.colors.grayLight};
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    font-size: 1.25rem;
    margin: 0.25rem 0;
    padding: ${({ theme }) => theme.spacers.xxs} ${({ theme }) => theme.spacers.xs};
    width: 15rem;
`

const Container = styled.div`
    background: ${({ theme }) => theme.colors.grayLightest};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`

const Card = styled.section`
    background: ${({ theme }) => theme.colors.white};
    border: solid 1px ${({ theme }) => theme.colors.grayLighter};
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    box-shadow: ${({ theme }) => theme.styles.boxShadow};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35vw;
    min-width: 20rem;
    padding: 2.5rem;
    position: relative;
`

const Evolutions = styled.h3`
    margin: 0.75rem 0;
    font-weight: 500;
`

const Name = styled.h2`
    font-weight: 500;
    margin: ${({ theme }) => theme.spacers.xs};
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

const P = styled.p`
    font-weight: 600;
    margin: 0.75rem 0;
`

const Span = styled.span`
    font-style: italic;
    font-weight: 400;
`

export default Pokemon