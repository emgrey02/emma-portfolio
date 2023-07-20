import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import Navigation from './navigation';
import Footer from './footer';
import { darkerGrotesque } from '../styles/fonts';

const name = 'emma grey';
export const siteTitle = `emma grey`;

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
			<Navigation></Navigation>
			<header className={styles.header}>
				{home ? (
					<div className={styles.title}>
						<Image
							priority
							src="/images/small-sun.svg"
							className={styles.image}
							height={700}
							width={800}
							alt="Emma's logo, which is her initials 'e' and 'g' with three sun rays coming out towards the top right corner."
						/>
						<h1 className={darkerGrotesque.className}>{name}</h1>
						<style jsx>{`
							h1 {
								position: absolute;
								bottom: 3.2rem;
								left: 41%;
								width: max-content;
								animation: fade-slide 1s
									cubic-bezier(0.25, 0.46, 0.45, 0.94);
							}

							@keyframes fade-slide {
								0% {
									opacity: 0;
									transform: translateX(200px);
								}
							}
						`}</style>
					</div>
				) : (
					<div className={styles.smallTitle}>
						<Link href="/">
							<Image
								priority
								src="/images/eg-full-logo-light.svg"
								className={styles.img}
								height={150}
								width={300}
								alt="the top half of a sun"
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
		</div>
	);
}
