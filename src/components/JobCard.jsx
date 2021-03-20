import styles from '../styles/components/JobCard.module.css';
import Link from 'next/link';

export default function JobCard(props) {
    let viewInfo;

    if (props.isViewAvailable == true) {
        viewInfo = '';
    } else {
        viewInfo = 'Visualização não disponível!'
    }

    return (
            <Link href={`${props.url}`}>
                <a target="_blank" className={styles.jobCard}>
                    <img src={`icons/pages/${props.image}`} alt={`${props.title}`}/>
                    <div>
                        <h2>{props.title}</h2>
                        <small>{viewInfo}</small>
                        <div><p>{props.children}</p></div>
                    </div>
                </a>
            </Link>
    );
}