import Button from '../components/Button';
import { darkerGrotesque } from '../styles/fonts';
import styles from '../styles/Home.module.scss';

export const metadata = {
    title: 'About Emma',
}

export default function About() {
    return (
            <section className={styles.cont}>
                <Button text="Go Back" link="/" />
                <h1 className={darkerGrotesque.className}>About</h1>
                <p>
                    Hi! After I completed a bachelor&apos;s degree in Clarinet
                    Performance in 2019 with the hopes of becoming a gigging
                    classical/jazz musician, I decided to transition to a career
                    in web design and/or development. I found that I enjoy
                    creating accessible front-end systems that users can
                    effectively interact with. Similar to how I strove to bring
                    joy to audiences with music, I want the user to enjoy their
                    experience on my web pages and feel satisfied afterwards
                    because they accomplished their goals with ease. While music
                    feels more open and varied in how it can affect an audience,
                    poor design decisions on the web immediately detriment the
                    user experience and can drive people away quickly. I realize
                    this and feel it is my responsibility to embed accessibility
                    into my design and development process so that no one is
                    left behind.
                </p>
                <p>
                    I just completed an Associate&apos;s degree in Interface
                    Design and Web Development in May of 2023, and my goal is to
                    land an entry-level web design or development position. I
                    have the most experience developing with HTML, CSS, and
                    JavaScript, and I&apos;ve used frameworks like React, Next,
                    and Svelte.
                </p>
                <p>
                    Thanks for being here! Please feel free to contact me about
                    anything!
                </p>
            </section>
    );
}
