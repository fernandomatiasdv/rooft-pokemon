import Head from 'next/head'
import Footer from "components/Footer"
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sooft Pokémon</title>
        <meta name="Sooft Pokémon" content="Página generada por Fernando del Valle" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <Footer />
      
    </div>
  )
}
