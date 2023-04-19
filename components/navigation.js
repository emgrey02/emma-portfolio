import Link from 'next/link';
import styles from './navigation.module.scss';
import Image from 'next/image';

export default function Navigation() {
	return (
		<div className={styles.container}>
			<Link className={styles.bkgd} href="/">
				<Image
					priority
					src="/images/eg-full-logo-light.svg"
					className={styles.image}
					height={90}
					width={250}
					alt="Emma's logo, which is her initials 'e' and 'g' with three sun rays coming out towards the top right corner."
				/>
			</Link>
			<ul className={styles.nav}>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
		</div>
	);
}
