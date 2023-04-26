import styles from './projects-nav.module.scss';
import utilStyles from '../styles/utils.module.scss';
import React, { useState } from 'react';

//const [dropdownState, open] = useState(false);

export default function ProjectsNav() {
	return (
		<nav className={styles.container}>
			<h3 className={utilStyles.headingXl}>websites</h3>
			<ul className={styles.nav}>
				<li className={styles.listItem}>
					<a href="#jam-house">Jam House</a>
				</li>
				<li className={styles.listItem}>
					<a href="#style-stage">Style Stage</a>
				</li>
				<li className={styles.listItem}>
					<a href="#life-nailed">Life Nailed</a>
				</li>
				<li className={styles.listItem}>
					<a href="#dcg">Diversity Community Group</a>
				</li>
				<li className={styles.listItem}>
					<a href="#digital-portfolio">Digital Portfolio</a>
				</li>
			</ul>
		</nav>
	);
}
