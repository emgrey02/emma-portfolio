import Head from 'next/head';
import Layout from '../../components/layout';
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';
import Button from '../../components/button';

export default function LifeNailed() {
	return (
		<Layout>
			<Head>
				<title>Life Nailed</title>
			</Head>
			<h1>Life Nailed</h1>
			<p>
				I volunteered to work on a project with{' '}
				<a
					className={styles.link}
					href="https://www.linkedin.com/company/diverse-design-collective/about/"
				>
					Diverse Design Collective
				</a>
				, a group of people looking to prepare for careers in UX design,
				focused on promoting the hiring of a diverse range of people.
			</p>
			<p>
				We had a client who wanted to have a website to promote their
				life coaching services. This included designing a logo, creating
				a color scheme, and formating and laying out content so that the
				user can effectively contact our client for life coaching
				services.
			</p>
			<p>
				My role in this group was mainly the web developer, so I took
				the high-fidelity wireframes the team created on figma and
				translated them to Wix. In the end, we made a website that our
				client was very pleased with, and now she receives contact from
				users wanting to work with her through her website.
			</p>
			<Button
				link="https://lifenailed.com"
				text="Go to Life Nailed"
			></Button>
			<Image
				src="/images/life-nailed-devices.png"
				width="0"
				height="0"
				sizes="100vw"
				className={styles.img}
				alt="Jam House website displayed on desktop and tablet"
			/>
			<Button
				link="https://lifenailed.com"
				text="Go to Life Nailed"
			></Button>
		</Layout>
	);
}
