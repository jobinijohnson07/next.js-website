import Head from 'next/head';
import styled from 'styled-components';

const Hero = styled.div `
  height: 90vh;
  display: flex;
  justify-content: center;
  aligin-items: center;
  background: #fff;
`

const Heading = styled.h1`
color: #000;
font-size: 8rem;
font-weight: 100;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>
          NEXT
        </Heading>
      </Hero>
    </>
  )
}
