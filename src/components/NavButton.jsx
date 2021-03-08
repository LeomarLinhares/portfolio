import { useState } from 'react';
import styles from '../styles/components/NavButton.module.css';

export default function NavButton() {
    let [isNavButtonActive, setIsNavButtonActive]  = useState(false);

    function setButtonStyle() {
        if (isNavButtonActive === true) {
            setIsNavButtonActive(false);
        } else {
            setIsNavButtonActive(true);
        }
    }

    return (
        <button 
        className={isNavButtonActive ? styles.navButtonActive : styles.navButton}
        onClick={setButtonStyle}
        >
            <div></div>
            <div></div>
            <div></div>
        </button>
    )
}