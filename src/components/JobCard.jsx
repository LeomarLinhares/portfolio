import styles from '../styles/components/JobCard.module.css';

export default function JobCard(props) {
    return (
        <div className={styles.jobCard}>
            <a href={`${props.url}`}>
                <img src={`icons/pages/${props.image}`} alt={`${props.title}`} target="_blank" />
            <div>
                <h2>{props.title}</h2>
                <hr/>
                <p>{props.children}</p>
            </div>
            </a>
      </div>
    );
}