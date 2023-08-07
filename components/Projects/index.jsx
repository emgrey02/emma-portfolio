import Image from 'next/image';
import { useEffect, useState } from 'react';
import { darkerGrotesque } from '../../styles/fonts';
import Project from '../Project';
import ProjectsNav from '../ProjectsNav';
import styles from './Projects.module.scss';
import ProjectList from '/json/data';

export default function Projects(fallbackVal = 'websites') {
    const [currentPage, setCurrentPage] = useState(fallbackVal);

    useEffect(() => {
        const page = localStorage.getItem('current-page');
        setCurrentPage(page ? page : fallbackVal);
    }, [fallbackVal]);

    useEffect(() => {
        localStorage.setItem('current-page', currentPage);
    }, [currentPage]);

    let sortedProjects;
    let displayedProjects;

    let sortProjects = (page) => {
        sortedProjects = ProjectList[page];

        displayedProjects =
            sortedProjects?.length > 0 ? (
                sortedProjects.map((project, index) => {
                    return (
                        <Project
                            key={`${project}${index}`}
                            title={project.title}
                            badges={project.badges}
                            links={project.links}
                            image={project.image}
                            cat={page}
                            audio={project.audio}
                        ></Project>
                    );
                })
            ) : (
                <div> No projects to display</div>
            );
    };

    const handleChangePage = (e) => {
        console.log('fired');
        let page = e.target.innerText;
        setCurrentPage(page);
        sortProjects(page);
    };

    sortProjects(currentPage);

    let categories = ['websites', 'designs', 'art', 'music'];

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
                <ProjectsNav
                    page={currentPage}
                    onClick={handleChangePage}
                    categories={categories}
                ></ProjectsNav>
                <div className={styles.projCont}>{displayedProjects}</div>
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
