import ProjectNavButton from '../ProjectNavButton';
import styles from './ProjectsNav.module.scss';

export default function ProjectsNav({ page, onClick, categories }) {
    const navItems = categories.map((category, index) => (
        <li key={index} className={styles.listItem}>
            <ProjectNavButton
                text={category}
                onClick={onClick}
                currentPage={page}
            ></ProjectNavButton>
        </li>
    ));

    return (
        <nav className={styles.container}>
            <ul className={styles.nav}>{navItems}</ul>
        </nav>
    );
}
