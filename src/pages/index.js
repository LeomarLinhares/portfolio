import Head from 'next/head'
import { render } from 'react-dom'
import Card from '../components/Card'
import Footer from '../components/Footer'
import JobCard from '../components/JobCard'
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
              name='sobre'
            >
              <p>Sou um estudante de licenciatura que esbarrou na programação e decidiu unir suas duas paixões.</p>
              <p>Objetivo contribuir para a democratização do acesso ao conhecimento de tecnologia, pois foi dessa forma que fui alcançado e que se deu o início dos meus estudos voltados para a área de desenvolvimeto. Nada mais justo do que retribuir em gratidão.</p>
            </Card>

            <Card 
              type='jobsCard'
              title='trabalhos'
              name='trabalhos'
            >
              <JobCard
                url='https://leomarlinhares-moveit.vercel.app/'
                image='rocketseat.jpg'
                title='Move.it (NLW#4)'
              >
                <p>Projeto criado durante a quarta Next Level Week junto da Rocketseat.</p>
                <p>A aplicação consiste em um timer pensado para a saúde do profissional que trabalha no computador, como os desenvolvedores. O timer comta com uma gamificação com desafios e uma barra de experiência para progressão de níveis.</p>
                <p>Nessa NLW em específico eu já estava trabalhando com o Next.js, portanto não tive um aprendizado tão grande quanto os que tive em edições anteriores, entretanto vale a experiência.</p>
              </JobCard>

              <JobCard
                url='https://github.com/LeomarLinhares/Happy--NextLevelWeek-'
                image='rocketseat.jpg'
                title='Happy (NLW#3)'
              >
                <small>Não possuí visualização!</small>
                <p>Projeto criado durante a terceira Next Level Week junto da Rocketseat.</p>
                <p>A aplicação é um mapa de orfanatos que aponta a localização dos mesmos e torna possível cadastrar novos orfanatos.</p>
                <p>Nessa NLW eu aprendia na trilha Discovery e foi utilizado Handlebars no projeto.</p>
              </JobCard>

              <JobCard
                url='https://github.com/LeomarLinhares/Proffy--NextLevelWeek-'
                image='rocketseat.jpg'
                title='Proffy (NLW#2)'
              >
                <small>Não possuí visualização!</small>
                <p>Primeira Next Level Week que participei.</p>
                <p>A aplicação é uma plataforma de cadastro de professores que conta com uma Landing Page e formulário. Além disso os alunos podem entrar em contato com os professores via WhatsApp com a API de automatização de mensagem.</p>
              </JobCard>

              <JobCard
                url="https://leomarlinhares.github.io/Calicojack/"
                image='mrqi.png'
                title='CalicoJack (de Stardew Valley)'
              >
                <p>Réplica do jogo CalicoJack, variação do clássico jogo de cartas Blackjack presente em Stardew Valley.</p>
                <p>O jogo é feito sem nenhum framework, é uma SPA feita de JavaScript puro. Eu pretendo futuramente criar o mesmo jogo utilizando ReactJS, provavelmente com a biblioteca Next.js.</p>
                <p>Foi um projeto de treino com JavaScript que fiz do absoluto zero idealizando eu mesmo como seria o funcionamento, portanto nesse caso o visual não era o foco.</p>
              </JobCard>
              <JobCard
                url='https://leomarlinhares.github.io/Miranda-s-calendar/'
                image='miranda.jpg'
                title='Calendário de Miranda'
              >
                <p>Foi criado para resolver um problema pessoal de um outro projeto pessoal.</p>
                <p>Mostra que dia é em Miranda em relação a Terra. Miranda é um outro mundo de uma história fictícia e esse projeto foi uma das formas de treinar JavaScript.</p>
              </JobCard>


            </Card>

            <Card 
              type='contactCard'
              title='contato'
              name='contato'
            />
          </div>
        </main>
        <Footer />
      </div>
    </GlobalInfo>
  )
}
