import styles from '../components/contactForm.module.scss';

import Button from './button';

export default function contactForm() {
	return (
		<div className={styles.container}>
			<form
				className={styles.form}
				action="/api/form"
				method="post"
				id="send-message"
				aria-label="Send a message to Emma"
			>
				<label htmlFor="name">name</label>
				<input id="name" name="name" type="text" required />

				<label htmlFor="email">email</label>
				<input id="email" name="email" type="text" required />

				<label htmlFor="message">message</label>
				<textarea
					rows="10"
					id="message"
					name="message"
					required
				></textarea>

				<Button text="submit" type="submit"></Button>
			</form>
		</div>
	);
}
