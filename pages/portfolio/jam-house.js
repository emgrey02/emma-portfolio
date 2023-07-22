import Head from 'next/head';
import Layout from '../../components/layout';
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';
import Button from '../../components/button';

export default function JamHouse() {
    return (
        <Layout>
            <Head>
                <title>Jam House</title>
            </Head>
            <h1>Jam House</h1>
            <p>
                Jam House is a project meant to bring joy. A team of five worked
                together to bring it to life - after talking about what we
                wanted to create, this idea formed because of our common love
                for music.
            </p>
            <p>
                Music has the power to bring joy just by listening to it, but
                creating it is usually a different story. People can be
                intimidated by having to learn an instrument or a difficult
                piece of software and never try to make their own music. They
                may even think that because they have no &ldquo;musical
                talent,&ldquo; they shouldn&quot;t even try.
            </p>
            <p>
                Jam House is here to encourage you to play around and see what
                sounds you can make with ease, without the fear of not being
                able to. No high learning curve, no overwhelming interface with
                too many options, just a place to create sounds. Listening to
                music is great, making it and listening back, is even better.
                Just touch or click, and have fun!{' '}
            </p>
            <Button
                link="https://jam-house.netlify.app"
                text="Go to the Jam House"
            ></Button>
            <Image
                src="/images/portfolio-jamhouse-home.png"
                width="0"
                height="0"
                sizes="100vw"
                className={styles.img}
                alt="Jam House website displayed on desktop and tablet"
            />
            <p>
                We noticed that music lovers want to create music but don&quot;t
                necessarily have the time or energy to become a producer or
                learn an instrument. This results in wasted opportunities to
                increase their love and appreciation for music. We wanted to
                tackle this by designing an easy-to-use interface and
                music-creation software so that users can have fun making their
                own music with ease.
            </p>
            <p>
                One of our goals for this project was to make sure our interface
                is welcoming rather than intimidating. This led us to use
                bright, slightly de-saturated colors to reflect the playfulness
                of the site, less words and more icons so users don&quot;t get
                scared about not knowing what a word means and are encouraged to
                poke around and press things, and big undo/redo buttons so the
                user never has to fear about making a permanent mistake.
            </p>
            <Image
                src="/images/jam-house-ui-elements.png"
                width="0"
                height="0"
                sizes="100vw"
                className={styles.img}
                alt="Jam House website displayed on desktop and tablet"
            />
            <Image
                src="/images/portfolio-jamhouse-front.png"
                width="0"
                height="0"
                sizes="100vw"
                className={styles.img}
                alt="Jam House website displayed on desktop and tablet"
            />
            <Button
                link="https://jam-house.netlify.app"
                text="Go to the Jam House"
            ></Button>
        </Layout>
    );
}
