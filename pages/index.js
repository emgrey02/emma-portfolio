import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import Projects from '../components/projects';

export default function Home() {
	return (
		<div>
			<Layout home>
				<Head>
					<title>{siteTitle}</title>
				</Head>
				<div>
					<p>Hello there! Welcome to my portfolio website.</p>
					<p>
						Here you can peruse the projects I’ve worked on
						throughout the three years I’ve been learning web design
						and development. I’m passionate about creating effective
						user experiences that are accessible to all, and I hope
						that is evident in my creations. I will not contribute
						to the 99% of the web that is inaccessible!
					</p>
					<p>
						I designed this website with Figma and coded it with
						Next.js. If you’d like to learn a little bit about me,
						visit the{' '}
						<Link className={styles.link} href="/about">
							About
						</Link>{' '}
						page. If you want to contact me for any reason, please
						go to the{' '}
						<Link className={styles.link} href="/contact">
							Contact
						</Link>{' '}
						page and fill out the form. Otherwise, I hope you enjoy
						your time here!
					</p>
				</div>
			</Layout>
			<section>
				<Projects></Projects>
			</section>
		</div>
	);
}
