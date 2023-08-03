import ProjectNavButton from '../ProjectNavButton';
import styles from './ProjectsNav.module.scss';

export default function ProjectsNav({ page, onClick, categories }) {
    const navItems = categories.map((category, index) => (
        <ProjectNavButton
            key={index}
            text={category}
            onClick={onClick}
            currentPage={page}
        ></ProjectNavButton>
    ));

    return (
        <nav className={styles.container}>
            <ul className={styles.nav}>{navItems}</ul>
        </nav>
    );
}
