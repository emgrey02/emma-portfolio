import styles from './nav-btn.module.scss';

export default function NavButton({ selected, text, onClick }) {
	let name = 'default';

	if (selected) {
		name = 'selected';
	}

	return (
		<button type="button" onClick={onClick} className={styles[`${name}`]}>
			{text}
		</button>
	);
}
