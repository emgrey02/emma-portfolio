import Head from 'next/head';
import Layout from '../../components/layout';
import Button from '../../components/button';

export default function DCG() {
    return (
        <Layout>
            <Head>
                <title>Digital Portfolio</title>
            </Head>
            <h1>Digital Portfolio</h1>
            <p>This one you are looking at right now!</p>
            <p>
                Creating a digital identity for myself was strange at first, but
                it ended up being really beneficial to me. Now I know a little
                bit of how I want to present myself to the world (at least
                online) and promote my skills for hiring managers. Following
                this is a link to my design documentation for this website, so
                you can see the thought processes I went through to create every
                aspect of my digital persona.
            </p>
            <p>This website was made with Next.js and is hosted on Netlify.</p>
            <Button
                link="/images/style-guide.pdf"
                text="Digital Portfolio Design Documentation"
            ></Button>
        </Layout>
    );
}
