import Navigation from './components/MainNav';
import './global.css';
import styles from './Layout.module.scss';
import { questrial } from './styles/fonts';

export const metadata = {
    title: 'Home',
    description: "Welcome to Emma's portfolio",
};

export default function Layout({ children }) {
    return (
        <html lang="en">
            <body className={questrial.className}>
                <header className={styles.header}>
                    <Navigation></Navigation>
                </header>
                <main>{children}</main>
            </body>
        </html>
    );
}
