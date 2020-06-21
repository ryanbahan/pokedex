import Head from 'next/head'
import styled from 'styled-components'
import CardContainer from '../src/components/cardContainer/cardContainer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CardContainer />
    </div>
  )
}
