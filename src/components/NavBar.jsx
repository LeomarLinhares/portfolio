import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalInfo';
import styles from '../styles/components/NavBar.module.css'

export default function NavBar() {
    const { navBarState } = useContext(GlobalContext);

    return (
        <div 
        className={navBarState ? styles.navBarContainer : styles.inactive }
        >
            <header>
                <img src="logo.svg" alt="Logo"/>
            </header>
            <nav>
                <div></div>
                <button href='#sobre'>Sobre</button>
                <button>Trabalhos</button>
                <button>Contato</button>
                <div></div>
            </nav>
            <footer>
                <a href="https://github.com/LeomarLinhares" target="_blank">
                    <img src="icons/github.svg" alt="github"/>
                </a>
                <a href="https://www.instagram.com/devclassroom/" target="_blank">
                    <img src="icons/instagram.svg" alt="instagram"/>
                </a>
                <a href="https://twitter.com/LeomarLinhares" target="_blank">
                    <img src="icons/twitter.svg" alt="twitter"/>
                </a>
                <a href="https://www.linkedin.com/in/leomarlinhares" target="_blank">
                    <img src="icons/linkedin.svg" alt="linkedin"/>
                </a>
            </footer>
        </div>
    )
}