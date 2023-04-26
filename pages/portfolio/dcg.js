import Head from 'next/head';
import Layout from '../../components/layout';
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';
import Button from '../../components/button';

export default function DCG() {
	return (
		<Layout>
			<Head>
				<title>Diversity Community Group</title>
			</Head>
			<h1>Diversity Community Group</h1>
			<p>
				Diversity Community Group is a community of DEIB (Diversity,
				Equity, Inclusion, and Belonging) Practitioners. The founder
				wanted a website made for the group to commemorate their first
				year anniversary.
			</p>
			<p>
				I worked with a UX Designer I had worked with before on the Life
				Nailed project with Diverse Design Collective. While she was the
				lead on designing the website, I helped with wireframing and
				creating UI elements for the page. My main role was the web
				developer so I translated the high fidelity prototypes to a
				website hosted by Wix.
			</p>
			<p>
				I worked with a UX Designer I had worked with before on the Life
				Nailed project with Diverse Design Collective. While she was the
				lead on designing the website, I helped with wireframing and
				creating UI elements for the page. My main role was the web
				developer so I translated the high fidelity prototypes to a
				website hosted by Wix.
			</p>
			<Button
				link="https://dcgforyou.wixsite.com/d-c-g"
				text="Go to DCG's website"
			></Button>
			<Image
				src="/images/dcg-devices.png"
				width="0"
				height="0"
				sizes="100vw"
				className={styles.img}
				alt="Jam House website displayed on desktop and tablet"
			/>

			<Image
				src="/images/dcg-desktop.png"
				width="0"
				height="0"
				sizes="100vw"
				className={styles.img}
				alt="Jam House website displayed on desktop and tablet"
			/>
			<Button
				link="https://dcgforyou.wixsite.com/d-c-g"
				text="Go to DCG's website"
			></Button>
		</Layout>
	);
}
