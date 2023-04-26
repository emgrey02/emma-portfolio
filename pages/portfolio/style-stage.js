import Head from 'next/head';
import Layout from '../../components/layout';
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';
import Button from '../../components/button';

export default function StyleStage() {
	return (
		<Layout>
			<Head>
				<title>Style Stage</title>
			</Head>
			<h1>Style Stage</h1>
			<p>
				Style Stage is a project created by Stephanie Eckles to
				encourage designing a webpage with CSS to refresh skills and
				practice the latest modern CSS properties. I submitted a
				stylesheet and chose a playful, hand-drawn style with elements
				of brutalism in there. I call it "Drawing Board". Starting with
				an HTML file, I wrote a stylesheet with SCSS to create my own
				styled version of the webpage. Requirements included being fully
				accessible: proper color contrast, skip-navigation link, 200%
				zoom check, image alt text, and more. Some CSS techniques I used
				were clamp(), list counter, nth-child selectors, grid, pseudo
				elements, and clip-paths.
			</p>
			<p>
				You can check out all of the community contributions by clicking
				the link to see mine and following the "All Styles" link in the
				navigation bar. I encourage you to see how others have styled
				the webpage, and maybe take a shot at participating yourself!
			</p>
			<Button
				link="https://stylestage.dev/styles/drawing-board"
				text="Go to Drawing Board"
			></Button>
			<Image
				src="/images/style-stage-desktop.png"
				width="0"
				height="0"
				sizes="100vw"
				className={styles.img}
				alt="Jam House website displayed on desktop and tablet"
			/>
			<p>The page is beautifully responsive of course!</p>
			<Image
				src="/images/style-stage-otherdevices.png"
				width="0"
				height="0"
				sizes="100vw"
				className={styles.img}
				alt="Jam House website displayed on desktop and tablet"
			/>
			<Button
				link="https://stylestage.dev/styles/drawing-board"
				text="Go to Drawing Board"
			></Button>
		</Layout>
	);
}
