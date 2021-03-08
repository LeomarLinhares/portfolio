import styles from '../styles/components/NavBar.module.css'

export default function NavBar() {
    let navBarIsActive = false;

    return (
        <div className={navBarIsActive ? styles.navBarContainer : styles.inactive}>
            <header>
                <span>LeomarLinhares</span>
            </header>
            <nav>
                <div></div>
                <button>Home</button>
                <button>Home</button>
                <button>Home</button>
                <button>Home</button>
                <button>Home</button>
                <div></div>
            </nav>
            <footer>
                <img src="" alt="Twitter"/>
                <img src="" alt="LinkedIn"/>
            </footer>
        </div>
    )
}