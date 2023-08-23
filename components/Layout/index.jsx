import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../Footer';
import Navigation from '../MainNav';
import styles from './Layout.module.scss';

export const siteTitle = `emma grey`;

export default function Layout({ children, home }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/eg-logo.svg" />
                <meta
                    name="description"
                    content="Emma Grey's portfolio website that showcases her web design and development work"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                <Navigation></Navigation>
                {!home && (
                    <div className={styles.smallTitle}>
                        <Link href="/">
                            <Image
                                priority
                                src="/images/eg-full-logo-light.svg"
                                className={styles.img}
                                height={150}
                                width={300}
                                alt="Emma Grey's full logo, which includes her name, her profession, and her small logo with her initials EG with three sun rays extending out from the top right corner"
                            />
                        </Link>
                    </div>
                )}
            </header>
            <main className={styles.container}>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}
            {!home && <Footer></Footer>}
        </>
    );
}
