import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import styles from '../styles/Home.module.scss';
import { darkerGrotesque } from '../styles/fonts';
import utilStyles from '../styles/utils.module.scss';

export const metadata = {
    title: 'Contact Emma'
}

export default function Contact() {
    return (
        
        <section className={styles.cont}>
            <Button text="Go Back" link="/" />
            <h1 className={darkerGrotesque.className}>Contact Emma</h1>
            <div>
                <ul className={utilStyles.list}>
                    <li>
                        <a href="https://www.linkedin.com/in/emma-grey-289321190/">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://www.github.com/emgrey02">Github</a>
                    </li>
                </ul>
            </div>
            <ContactForm></ContactForm>
        </section>
        
    );
}
