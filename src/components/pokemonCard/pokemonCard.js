import styled from 'styled-components'
import { arrayToString } from '../../utils'

const PokemonCard = ({
    height,
    id,
    img,
    multipliers,
    name,
    num,
    type,
    weaknesses,
    weight,
}) => {
    return (
        <Section>
            <P>name: { name }</P>
            <P>number: { num }</P>
            <img src={ img } />
            <P>type: { arrayToString(type) }</P>
            <P>weaknesses: { arrayToString(weaknesses) }</P>
        </Section>
    )
}

const Section = styled.section`
    border: solid 1px black;
    margin: 2.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const P = styled.p`
    text-align: center;
    max-width: 80%;
`

export default PokemonCard