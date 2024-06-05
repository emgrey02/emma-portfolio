import Image from 'next/image';
import { useEffect, useState } from 'react';
import { darkerGrotesque } from '../../styles/fonts';
import Project from '../Project';
import ProjectsNav from '../ProjectsNav';
import styles from './Projects.module.scss';
import ProjectList from '/json/data';

export default function Projects() {
    const [currentPage, setCurrentPage] = useState('websites');

	useEffect(() => {
		localStorage.setItem('current-page', currentPage);
	}, [currentPage]);
	
    useEffect(() => {
        let page = localStorage.getItem('current-page');
		setCurrentPage(page);
    });


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
                            desc={project.desc}
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
        <div id="portfolio" className={styles.projectsCont}>
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
        </div>
    );
}
