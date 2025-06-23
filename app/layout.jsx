import Navigation from './components/MainNav';
import './global.css';
import styles from './Layout.module.scss';
import { questrial } from './styles/fonts';

export const metadata = {
    metadataBase: new URL('https://www.emmagrey.dev'),
    alternates: {
        canonical: '/',
        languages: {
            en: '/',
        },
    },
    title: {
        template: "%s | emma grey's portfolio website",
        default: "emma grey's portfolio website",
    },
    description:
        'emma is a front-end web developer and designer specializing in responsive websites and modern frameworks like Next.js and Tailwind CSS.',
    keywords:
        'emma, portfolio, web developer, designer, front-end, responsive websites, Next.js, Tailwind CSS',
};

export default function Layout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="apple-mobile-web-app-title" content="emma grey" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </head>
            <body className={questrial.className}>
                <header className={styles.header}>
                    <Navigation></Navigation>
                </header>
                <main>{children}</main>
            </body>
        </html>
    );
}
