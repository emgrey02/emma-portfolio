import Layout from '../components/Layout';
import styles from '../styles/Home.module.scss';

export default function FormThanks() {
    return (
        <Layout>
            <p className={styles.thanks}>
                Thanks for contacting Emma! She will reply to you within 2
                business days.
            </p>
        </Layout>
    );
}
