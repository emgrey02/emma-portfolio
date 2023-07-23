import Image from 'next/image';
import Link from 'next/link';
import styles from './MainNav.module.scss';

export default function Navigation() {
    return (
        <div className={styles.container}>
            <Link className={styles.bkgd} href="/">
                <Image
                    priority
                    src="/images/eg-logo-dark.svg"
                    className={styles.image}
                    height={100}
                    width={100}
                    alt="Emma's logo, which is her initials 'e' and 'g' with three sun rays coming out of the top right corner."
                />
            </Link>
            <ul className={styles.nav}>
                <li>
                    <Link href="/about">about</Link>
                </li>
                <li>
                    <Link href="/contact">contact</Link>
                </li>
                <li>
                    <Link href="/resume">resume</Link>
                </li>
            </ul>
        </div>
    );
}
