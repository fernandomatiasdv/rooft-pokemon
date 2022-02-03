import Head from 'next/head'
import { Container, Footer } from "../components"
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sooft Pokémon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="Sooft Pokémon" content="Página generada por Fernando del Valle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container />
      <Footer />
      
    </div>
  )
}
