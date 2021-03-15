import { useContext, useState } from 'react';
import { GlobalContext } from '../contexts/GlobalInfo';
import styles from '../styles/components/NavButton.module.css';

export default function NavButton() {
    let [isNavButtonActive, setIsNavButtonActive]  = useState(false);
    const { navBarState, setNavBarState } = useContext(GlobalContext)

    function menuButtonFunc() {
        if (navBarState === true) {
            setNavBarState(false);
            setIsNavButtonActive(false)
        } else {
            setNavBarState(true);
            setIsNavButtonActive(true)
        }
    }

    return (
        <button 
        className={isNavButtonActive ? styles.navButtonActive : styles.navButton}
        onClick={menuButtonFunc}
        >
            <div></div>
            <div></div>
            <div></div>
        </button>
    )
}