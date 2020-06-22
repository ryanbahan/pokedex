import styled from 'styled-components'
import { arrayToString } from '../../utils'
import Link from 'next/link'

const PokemonCard = ({
    img,
    name,
    num,
    type,
    weaknesses,
}) => {
    return (
        <Link href={"/pokemon/" + num}>
            <Section>
                <P>name: {name}</P>
                <P>number: {num}</P>
                <img src={img} />
                <P>type: {arrayToString(type)}</P>
                <P>weaknesses: {arrayToString(weaknesses)}</P>
            </Section>
        </Link>
    )
}

const Section = styled.section`
    border: solid 1px black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const P = styled.p`
    text-align: center;
    max-width: 80%;
`

export default PokemonCard