import { useRouter } from 'next/router';
import styles from './ContactForm.module.scss';

import Button from '../Button';

export default function ContactForm() {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push('/form-thankyou');
    };

    return (
        <div className={styles.container}>
            <form
                name="contact form"
                onSubmit={handleSubmit}
                className={styles.form}
                id="send-message"
                aria-label="Send a message to Emma"
                data-netlify="true"
            >
                <label htmlFor="name">name</label>
                <input id="name" name="name" type="text" required />

                <label htmlFor="email">email</label>
                <input id="email" name="email" type="text" required />

                <label htmlFor="message">message</label>
                <textarea
                    className={styles.textArea}
                    rows="7"
                    id="message"
                    name="message"
                    required
                ></textarea>

                <Button
                    className="submit"
                    onClick={(e) => {
                        handleSubmit(e);
                    }}
                    text="submit"
                    size="medium"
                ></Button>
            </form>
        </div>
    );
}
