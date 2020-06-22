import styled from 'styled-components'
import { arrayToString } from '../../utils'
import Link from 'next/link'

const PokemonCard = ({
    img,
    name,
    num,
    type,
}) => {
    return (
        <Link href={"/pokemon/" + num}>
            <Section>
                <Num>{num}</Num>
                <img src={img} />
                <Name>{name}</Name>
                <P>{arrayToString(type)}</P>
            </Section>
        </Link>
    )
}

const Num = styled.span`
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border-top-left-radius: ${({ theme }) => theme.styles.borderRadius};
    border-bottom-right-radius: ${({ theme }) => theme.styles.borderRadius};
    position: absolute;
    padding: ${({ theme }) => theme.spacers.xxs};
    top: 0;
    left: 0;
`

const Name = styled.h2`
    font-weight: 500;
    margin: ${({ theme }) => theme.spacers.xs};
`

const Section = styled.section`
    border: solid 1px ${({ theme }) => theme.colors.grayLighter};
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.styles.boxShadow};
    padding: ${({ theme }) => theme.spacers.xs};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
`

const P = styled.p`
    text-align: center;
    max-width: 80%;
`

export default PokemonCard