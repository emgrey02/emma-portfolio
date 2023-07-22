import styles from './projects-nav.module.scss';
import React, { useState } from 'react';
import NavButton from './nav-btn';

export default function ProjectsNav() {
    const [currentPage, setCurrentPage] = useState({ category: 'websites' });

    let categories = ['websites', 'designs', 'art', 'music'];

    const navItems = categories.map((category, index) => (
        <li key={index} className={styles.listItem}>
            <NavButton
                text={category}
                onClick={() => setCurrentPage({ category })}
                currentPage={currentPage.category}
            ></NavButton>
        </li>
    ));

    return (
        <nav className={styles.container}>
            <ul className={styles.nav}>{navItems}</ul>
        </nav>
    );
}
