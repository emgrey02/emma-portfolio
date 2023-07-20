import styles from './projects-nav.module.scss';
import React, { useState } from 'react';
import NavButton from './nav-btn';

// const [selectedState, open] = useState(false);

export default function ProjectsNav() {
	return (
		<nav className={styles.container}>
			<ul className={styles.nav}>
				<li className={styles.listItem}>
					<NavButton text="websites" selected></NavButton>
				</li>
				<li className={styles.listItem}>
					<NavButton text="designs"></NavButton>
				</li>
				<li className={styles.listItem}>
					<NavButton text="art"></NavButton>
				</li>
				<li className={styles.listItem}>
					<NavButton text="music"></NavButton>
				</li>
			</ul>
		</nav>
	);
}
