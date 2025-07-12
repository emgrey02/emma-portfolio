import styles from './Footer.module.scss';

export default function Footer() {
    let currentYear = new Date().getFullYear();
    return (
        <footer className={styles.container}>
            <p>emma grey ©{currentYear} </p>
        </footer>
    );
}
