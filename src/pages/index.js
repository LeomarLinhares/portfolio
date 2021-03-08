import Head from 'next/head'
import NavBar from '../components/NavBar'
import NavButton from '../components/NavButton'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Leomar Linhares</title>
      </Head>
      
      <NavButton />
      <NavBar />

      
    </div>
  )
}
