import Link from 'next/link';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalInfo';
import styles from '../styles/components/NavBar.module.css'

export default function NavBar() {
    const { navBarState, setNavBarState } = useContext(GlobalContext);

    function closeBar() {
        setNavBarState(false)
    }

    return (
        <div 
        className={navBarState ? styles.navBarContainer : styles.inactive }
        >
            <header>
                <Link href='#'>
                    <a>
                        <img src="logo.svg" alt="Logo"/>
                    </a>
                </Link>
            </header>
            <nav>
                <div></div>
                    <Link href="#sobre">
                        <a onClick={closeBar}>Sobre</a>
                    </Link>
                    <Link href="#trabalhos">
                        <a onClick={closeBar}>Trabalhos</a>
                    </Link>
                    <Link href="#contato">
                        <a onClick={closeBar}>Contato</a>
                    </Link>
                <div></div>
            </nav>
            <footer>
                <a onClick={closeBar} href="https://github.com/LeomarLinhares" target="_blank">
                    <img src="icons/github.svg" alt="github"/>
                </a>
                <a onClick={closeBar} href="https://www.instagram.com/devclassroom/" target="_blank">
                    <img src="icons/instagram.svg" alt="instagram"/>
                </a>
                <a onClick={closeBar} href="https://twitter.com/LeomarLinhares" target="_blank">
                    <img src="icons/twitter.svg" alt="twitter"/>
                </a>
                <a onClick={closeBar} href="https://www.linkedin.com/in/leomarlinhares" target="_blank">
                    <img src="icons/linkedin.svg" alt="linkedin"/>
                </a>
            </footer>
        </div>
    )
}