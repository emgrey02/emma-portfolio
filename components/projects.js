import ProjectsNav from './projects-nav';
import Image from 'next/image';
import Link from 'next/link';
import styles from './projects.module.scss';

export default function Projects() {
	return (
		<div>
			<div id="portfolio" className={styles.nav}>
				<Image
					priority
					src="/images/half-sun-light.svg"
					className={styles.sunImg}
					height={150}
					width={300}
					alt="the top half of a sun"
				/>
				<ProjectsNav></ProjectsNav>
			</div>
			<section className={styles.container}>
				<div className={styles.images}>
					<div id="jam-house">
						<h2>Jam House</h2>
						<Link href="portfolio/jam-house">
							<Image
								src="/images/jam-house.png"
								width="0"
								height="0"
								sizes="100vw"
								className={styles.img}
								alt="Jam House website displayed on desktop and tablet"
							/>
						</Link>
						<h3>tech</h3>
						<ul className={styles.tech}>
							<li>figma</li>
							<li>html/css</li>
							<li>javascript</li>
							<li>tone.js</li>
							<li>netlify</li>
							<li>github</li>
						</ul>
					</div>
					<div id="style-stage">
						<h2>Style Stage</h2>
						<Link href="portfolio/style-stage">
							<Image
								src="/images/style-stage.png"
								width="0"
								height="0"
								sizes="100vw"
								className={styles.img}
								alt="Jam House website displayed on desktop and tablet"
							/>
						</Link>
						<h3>tech</h3>
						<ul className={styles.tech}>
							<li>css/scss</li>
							<li>json</li>
							<li>github</li>
							<li>figma</li>
						</ul>
					</div>
					<div id="life-nailed">
						<h2>Life Nailed</h2>
						<Link href="portfolio/life-nailed">
							<Image
								src="/images/life-nailed.png"
								width="0"
								height="0"
								sizes="100vw"
								className={styles.img}
								alt="Jam House website displayed on desktop and tablet"
							/>
						</Link>
						<h3>tech</h3>
						<ul className={styles.tech}>
							<li>figma</li>
							<li>wix</li>
							<li>seo</li>
							<li>diverse design collective</li>
						</ul>
					</div>
					<div id="dcg">
						<h2>Diversity Community Group</h2>
						<Link href="portfolio/dcg">
							<Image
								src="/images/dcg.png"
								width="0"
								height="0"
								sizes="100vw"
								className={styles.img}
								alt="Jam House website displayed on desktop and tablet"
							/>
						</Link>
						<h3>tech</h3>
						<ul className={styles.tech}>
							<li>figma</li>
							<li>wix</li>
							<li>wix events</li>
							<li>seo</li>
							<li>airtable</li>
						</ul>
					</div>
					<div id="digital-portfolio">
						<h2>Digital Portfolio</h2>
						<Link href="portfolio/digital-portfolio">
							<Image
								src="/images/digital-port.png"
								width="0"
								height="0"
								sizes="100vw"
								className={styles.img}
								alt="Jam House website displayed on desktop and tablet"
							/>
						</Link>
						<h3>tech</h3>
						<ul className={styles.tech}>
							<li>figma</li>
							<li>html/css</li>
							<li>next.js</li>
							<li>react</li>
							<li>netlify</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}
