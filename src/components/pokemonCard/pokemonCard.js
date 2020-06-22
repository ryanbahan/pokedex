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
        <Link href={"/" + num} as={"/pokemon/" + num}>
            <Section>
                <Num>{num}</Num>
                <img src={img} />
                <Name>{name}</Name>
                <P>{arrayToString(type)}</P>
            </Section>
        </Link>
    )
}

const Name = styled.h2`
    font-weight: 500;
    margin: ${({ theme }) => theme.spacers.xs};
`

const Num = styled.span`
    background: ${({ theme }) => theme.colors.primary};
    border-bottom-right-radius: ${({ theme }) => theme.styles.borderRadius};
    border-top-left-radius: ${({ theme }) => theme.styles.borderRadius};
    color: #fff;
    padding: ${({ theme }) => theme.spacers.xxs};
    position: absolute;
    top: 0;
    left: 0;
`

const P = styled.p`
    font-style: italic;
    max-width: 80%;
    text-align: center;
`

const Section = styled.section`
    background: ${({ theme }) => theme.colors.white};
    border: solid 1px ${({ theme }) => theme.colors.grayLighter};
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    box-shadow: ${({ theme }) => theme.styles.boxShadow};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => theme.spacers.xs};
    position: relative;
`

export default PokemonCard