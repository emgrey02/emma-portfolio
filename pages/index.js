import Head from 'next/head';
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
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                </Head>
                <div className={styles.marquee}>
                    <div className={styles.group1}>
                        <span>front end web developer</span>
                        <span>interface designer </span>
                        <span>musician</span>
                    </div>
                    <div className={styles.group2}>
                        <span>front end web developer</span>
                        <span>interface designer </span>
                        <span>musician</span>
                    </div>
                </div>
                <Projects></Projects>
            </Layout>

            <Footer></Footer>
        </>
    );
}
