'use client';

import Image from 'next/image';
import { darkerGrotesque } from '../../styles/fonts';
import Project from '../Project';
import styles from './Projects.module.scss';
import ProjectList from '/json/data';

export default function Projects() {
    const projects = ProjectList.websites.map((project, index) => {
        return (
            <Project
                key={`${project}${index}`}
                title={project.title}
                badges={project.badges}
                links={project.links}
                image={project.image}
                coverImage={project.coverImage}
                audio={project.audio}
                desc={project.desc}
            ></Project>
        );
    });

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
                <div className={styles.projCont}>{projects}</div>
            </div>
        </div>
    );
}
