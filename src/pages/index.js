import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sooft Pokémon</title>
        <meta name="Sooft Pokémon" content="Página generada por Fernando del Valle" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/PokemonGb-RAeo/PokemonGb-RAeo.ttf" as="font" crossOrigin=""/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>

      
      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/fernando-del-valle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Fernando del Valle
        </a>
      </footer>
    </div>
  )
}
