import styles from './ProjectNavButton.module.scss';

export default function ProjectNavButton({ onClick, text, currentPage }) {
    let selected = currentPage === text;

    let state = selected ? 'selected' : 'default';

    return (
        <li className={`${styles.listItem} ${styles[`${state}`]}`}>
            <button type="button" onClick={onClick} className={styles.button}>
                {text}
            </button>
        </li>
    );
}
