import Head from 'next/head'
import styled from 'styled-components'
import CardContainer from '../src/components/cardContainer/cardContainer'
import SearchForm from '../src/components/searchForm/searchForm'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchForm />
      <CardContainer />
    </Container>
  )
}

const Container = styled.div`
  margin: 2.5% 15%;
`
