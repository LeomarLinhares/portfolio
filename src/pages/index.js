import Head from 'next/head'
import { render } from 'react-dom'
import Card from '../components/Card'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import NavButton from '../components/NavButton'
import Presentation from '../components/Presentation'
import GlobalInfo from '../contexts/GlobalInfo'
import styles from '../styles/pages/Home.module.css'

export default function Home() {

  return (
    <GlobalInfo>
      <div className={styles.container}>
        <main>
          <Head>
            <title>Leomar Linhares</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Shrikhand&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet" />

            <link rel="shortcut icon" href="logo.svg" type="image/svg"/>
          </Head>
          
          <NavButton />
          <NavBar />
          <Presentation />
          <div>
            <Card 
              type='descriptiveCard'
              title='sobre'
            >
              <p>Sou um estudante de licenciatura que esbarrou na programação e decidiu unir suas duas paixões.</p>
              <p>Objetivo contribuir para a democratização do acesso ao conhecimento de tecnologia, pois foi dessa forma que fui alcançado e que se deu o início dos meus estudos voltados para a área de desenvolvimeto. Nada mais justo do que retribuir em gratidão.</p>
            </Card>

            <Card 
              type='jobsCard'
              title='trabalhos'
            >
              
            </Card>

            <Card 
              type='contactCard'
              title='contato'
            />
          </div>
        </main>
        <Footer />
      </div>
    </GlobalInfo>
  )
}
