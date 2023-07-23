import Image from 'next/image';
import { darkerGrotesque } from '../../styles/fonts';
import Project from '../Project';
import ProjectsNav from '../ProjectsNav';
import styles from './Projects.module.scss';

export default function Projects() {
    let title = 'jam house';
    let badges = [
        { text: 'web developer', theme: 'role' },
        { text: 'ui/ux designer', theme: 'role' },
        { text: 'tone.js', theme: 'tech' },
        { text: 'html', theme: 'tech' },
        { text: 'scss', theme: 'tech' },
        { text: 'javascript', theme: 'tech' },
        { text: 'netlify', theme: 'tech' },
        { text: 'github', theme: 'tech' },
    ];

    let links = {
        live: 'jam-house.netlify.app',
        code: 'github.com/emgrey02/idmx-music-app-plus',
    };

    return (
        <section>
            <div className={styles.header}>
                <h2 className={darkerGrotesque.className}>portfolio</h2>
                <Image
                    priority
                    src="/images/half-sun-light.svg"
                    className={styles.sunImg}
                    height={100}
                    width={200}
                    alt="the top half of a sun"
                />
                <style jsx>{`
                    h2 {
                        font-size: 3rem;
                        color: #2b3347;
                    }
                `}</style>
            </div>
            <div className={styles.container}>
                <ProjectsNav></ProjectsNav>
                <div className={styles.projCont}>
                    <Project title={title} badges={badges} links={links} />
                    <Project title={title} badges={badges} links={links} />
                    <Project title={title} badges={badges} links={links} />
                    <Project title={title} badges={badges} links={links} />
                    <Project title={title} badges={badges} links={links} />
                </div>
            </div>
        </section>
    );
}

{
    /* <div className={styles.images}>
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
				</div> */
}
