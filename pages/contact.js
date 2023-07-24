import Head from 'next/head';
import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';
import { darkerGrotesque } from '../styles/fonts';
import utilStyles from '../styles/utils.module.scss';

export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>Contact Emma</title>
            </Head>
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
        </Layout>
    );
}
