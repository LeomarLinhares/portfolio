import styles from '../styles/components/Presentation.module.css';

export default function Presentation() {
    return (
        <div className={styles.presentationContainer}>
            <div />

            <div>
                <img src="logo.svg" alt="Logo"/>
            </div>

            <div>
                <p>Oi, meu nome é</p>
                <span>Leomar Linhares</span>
                <p>desenvolvedor Front-End</p>
            </div>
        </div>
    )
}