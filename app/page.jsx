import Image from 'next/image';
import Button from './components/Button';
import Footer from './components/Footer';
import Projects from './components/Projects';
import styles from './styles/Home.module.scss';

export default function Home() {
    return (
        <>
            <section className={styles.homeHeader}>
                <h1>emma&apos;s portfolio</h1>
                <Image
                    src="/images/full-sun-light.svg"
                    alt="a portfolio of projects"
                    width={100}
                    height={100}
                />
                <div className={styles.heroCont}>
                    <div>hey there, my name is emma :)</div>
                    <div>
                        i am a front-end web developer and designer specializing
                        in responsive websites and modern frameworks like
                        Next.js and Tailwind CSS.
                    </div>
                    <div>check out my portfolio down below!</div>
                </div>
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
                            fillRule="evenodd"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </Button>
            </section>
            <Projects />
            <Footer />
        </>
    );
}
