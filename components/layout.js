import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navigation from './navigation';

const name = 'emma grey';
export const siteTitle = `Emma's Portfolio`;

export default function Layout({ children, home }) {
	return (
		<div>
			<Head>
				<link rel="icon" href="/eg-logo.svg" />
				<meta
					name="description"
					content="Emma Grey's portfolio website that showcases her web design and development work"
				/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={styles.header}>
				<Navigation></Navigation>
				{home ? (
					<>
						<Image
							priority
							src="/images/eg-logo-light.svg"
							className={styles.image}
							height={144}
							width={144}
							alt="Emma's logo, which is her initials 'e' and 'g' with three sun rays coming out towards the top right corner."
						/>
						<h1 className={utilStyles.heading2Xl}>{name}</h1>
					</>
				) : (
					<>
						<Link className={styles.noBkgd} href="/">
							<Image
								priority
								src="/images/half-sun-light.svg"
								className={styles.img}
								height={150}
								width={300}
								alt="the top half of a sun"
							/>
						</Link>
						<h2 className={utilStyles.headingLg}>{name}</h2>
					</>
				)}
			</header>
			<main className={styles.container}>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">← Back to home</Link>
				</div>
			)}
		</div>
	);
}
