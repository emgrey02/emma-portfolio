import styles from './button.module.scss';

export default function Button({ text, link }) {
	return (
		<div>
			{link ? (
				<a className={styles.button} href={link}>
					{text}
				</a>
			) : (
				<button className={styles.button}>{text}</button>
			)}
		</div>
	);
}
