import Button from '../Button';
import styles from './ContactForm.module.scss';

export default function ContactForm() {

    return (
        <div className={styles.container}>
            <form className={styles.form} action={'https://usebasin.com/f/1e27d2ea61da'} method='POST'>

                <input type="hidden" name="form-name" value="contact form" />

                <label htmlFor="name">Your Name</label>
                <input id="name" name="name" required />
            
            
                <label htmlFor="email">Email</label>
                <input id="email" name="email" required/>
            
            
                <label htmlFor="message">Message</label>
                <textarea className={styles.textArea} rows="7" id="message" name="message" required/> 
            
                <Button text="submit" size="medium"></Button>
            </form>
        </div>
    );
}
