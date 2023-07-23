import Head from 'next/head';
import Marquee from 'react-fast-marquee';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/Home.module.scss';

export default function Home() {
    return (
        <>
            <Layout home>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <Marquee className={styles.marquee}>
                    <div>| Front End Web Developer</div>
                    <div>Interface Designer </div>
                    <div>Musician |</div>
                </Marquee>
            </Layout>
            <Projects></Projects>
            <Footer></Footer>
        </>
    );
}
