import styles from './nav-btn.module.scss';

export default function NavButton({ onClick, text, currentPage }) {
	let selected = currentPage === text;
	console.log(currentPage);
	return (
		<>
			{selected ? (
				<button
					type="button"
					onClick={onClick}
					className={styles.button}
					style={{
						backgroundColor: '#e4d9c7',
					}}
				>
					{text}
				</button>
			) : (
				<button
					type="button"
					onClick={onClick}
					className={styles.button}
				>
					{text}
				</button>
			)}
		</>
	);
}
