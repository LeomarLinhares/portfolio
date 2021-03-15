import styles from '../styles/components/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div>
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
            </div>

            <span>Leomar Linhares ©</span>
        </footer>
    );
}