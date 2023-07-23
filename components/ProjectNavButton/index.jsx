import styles from './ProjectNavButton.module.scss';

export default function ProjectNavButton({ onClick, text, currentPage }) {
    let selected = currentPage === text;

    let state = selected ? 'selected' : 'default';

    return (
        <button
            type="button"
            onClick={onClick}
            className={`${styles.button} ${styles[`${state}`]}`}
        >
            {text}
        </button>
    );
}
