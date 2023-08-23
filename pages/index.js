import Head from 'next/head';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Layout, { siteTitle } from '../components/Layout';
import Projects from '../components/Projects';
import styles from '../styles/Home.module.scss';

export default function Home() {
    return (
        <>
            <Layout home>
                <Head>
                    <title>{siteTitle}</title>
                    <meta charset="utf-8" />
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                    <meta
                        name="description"
                        content="emma grey's portfolio of web design and development work"
                    />
                </Head>
                <div className={styles.homeHeader}>
                    <div>hey there, my name is emma :)</div>
                    <div>
                        bringing joy through beautiful, accessible websites is
                        my ultimate goal.
                    </div>
                    <div>check out my portfolio of projects down below!</div>
                    <Button size="small" link="#portfolio" img>
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                                fill="currentColor"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </Button>
                </div>
                <Projects></Projects>
            </Layout>
            <Footer></Footer>
        </>
    );
}
