import styles from '../components/contactForm.module.scss';
import { useRouter } from 'next/router';

import Button from './button';

import { useState } from 'react';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name,
            email,
            message,
        };

        fetch('/api/form', {
            method: 'post',
            body: JSON.stringify(data),
        });

        router.push('/form-thankyou');
    };

    return (
        <div className={styles.container}>
            <form
                onSubmit={handleSubmit}
                className={styles.form}
                id="send-message"
                aria-label="Send a message to Emma"
            >
                <label htmlFor="name">name</label>
                <input
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    id="name"
                    name="name"
                    type="text"
                    required
                />

                <label htmlFor="email">email</label>
                <input
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    id="email"
                    name="email"
                    type="text"
                    required
                />

                <label htmlFor="message">message</label>
                <textarea
                    className={styles.textArea}
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
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
                ></Button>
            </form>
        </div>
    );
}
