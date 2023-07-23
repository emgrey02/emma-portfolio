import React, { useState } from 'react';
import ProjectNavButton from '../ProjectNavButton';
import styles from './ProjectsNav.module.scss';

export default function ProjectsNav() {
    const [currentPage, setCurrentPage] = useState({ category: 'websites' });

    let categories = ['websites', 'designs', 'art', 'music'];

    const navItems = categories.map((category, index) => (
        <li key={index} className={styles.listItem}>
            <ProjectNavButton
                text={category}
                onClick={() => setCurrentPage({ category })}
                currentPage={currentPage.category}
            ></ProjectNavButton>
        </li>
    ));

    return (
        <nav className={styles.container}>
            <ul className={styles.nav}>{navItems}</ul>
        </nav>
    );
}
