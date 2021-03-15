import styles from '../styles/components/Card.module.css';

export default function Card(props) {

    if (props.type == 'descriptiveCard') {
        return (
            <div className={styles.card}>
                <span>{`.${props.title} {`}</span>
                <div>
                    {props.children}
                </div>
    
                <span>{'}'}</span>
            </div>
        );

    } else if (props.type == 'contactCard') {
        return (
            <div className={`${styles.card} ${styles.contactType}`}>
                <span>{`.${props.title} {`}</span>
                <div>
                <form action="mailto:leomarlinhares@gmail.com" method="GET">
                    <label htmlFor="subject">Nome:</label>
                    <input name="subject" type="text" />
                    <label htmlFor="body">Mensagem:</label>
                    <textarea name="body" ></textarea>
                    <input type="submit" value="Enviar" />
                </form>
                </div>
    
                <span>{'}'}</span>
            </div>
        );
        
    } else if (props.type == 'jobsCard') {
        return (
            <div className={`${styles.card} ${styles.jobsType}`}>
                <span>{`.${props.title} {`}</span>
                <div>
                    {props.children}
                </div>
                <span>{'}'}</span>
            </div>
        );
    }
}