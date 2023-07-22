import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/Home.module.scss';
import Projects from '../components/projects';
import Footer from '../components/footer';
import Marquee from 'react-fast-marquee';

export default function Home() {
    return (
        <div>
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
            <section>
                <Projects></Projects>
            </section>
            <Footer></Footer>
        </div>
    );
}
