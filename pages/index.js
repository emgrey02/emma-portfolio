import Head from 'next/head';
import Footer from '../components/Footer';
import Layout, { siteTitle } from '../components/Layout';
import Projects from '../components/Projects';

export default function Home() {
    return (
        <>
            <Layout home>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                {/* <Marquee className={styles.marquee}>
                    <div>| Front End Web Developer</div>
                    <div>Interface Designer </div>
                    <div>Musician |</div>
                </Marquee> */}
            </Layout>
            <Projects></Projects>
            <Footer></Footer>
        </>
    );
}
