import { useRouter } from 'next/router';
import Button from '../Button';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

        fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => router.push('/form-thankyou'))
            .catch((error) => alert(error));
    };

    return (
        <div className={styles.container}>
            <form
                data-netlify="true"
                name="contact form"
                method="post"
                action="/pages/form-thankyou"
                className={styles.form}
                onSubmit={handleSubmit}
                id="send-message"
                aria-label="Send a message to Emma"
            >
                <input type="hidden" name="form-name" value="contact form" />
                <label htmlFor="name">name</label>
                <input id="name" name="name" type="text" required />

                <label htmlFor="email">email</label>
                <input id="email" name="email" type="email" required />

                <label htmlFor="message">message</label>
                <textarea
                    className={styles.textArea}
                    rows="7"
                    id="message"
                    name="message"
                    required
                ></textarea>

                <Button className="submit" text="submit" size="medium"></Button>
            </form>
        </div>
    );
}
