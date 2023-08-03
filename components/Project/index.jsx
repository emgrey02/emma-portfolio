import Image from 'next/image';
import { darkerGrotesque } from '../../styles/fonts';
import { Badge } from '../Badge';
import { CodeLink } from '../CodeLink';
import { LiveLink } from '../LiveLink';
import styles from './Project.module.scss';

export default function Project({ title, image, badges, links, cat }) {
    const badgeGroup = badges.map((badge, index) => {
        return (
            <li key={index}>
                <Badge text={badge.text} theme={badge.theme} />
            </li>
        );
    });

    if (cat === 'websites') {
        cat = 'web';
    } else if (cat === 'art') {
        cat = 'art';
    } else {
        cat = 'other';
    }

    let dimh;
    let dimw;
    let altT;

    if (cat === 'web') {
        dimh = dimw = 80;
        altT = `${title} logo`;
    } else {
        dimw = 2000;
        dimh = 1400;
        altT = `${title}`;
    }

    let liveLink;
    let codeLink;
    let yesLinks;
    let pageLinks;

    if (links) {
        liveLink = links.live ? <LiveLink url={links.live} /> : <></>;
        codeLink = links.code ? <CodeLink url={links.code} /> : <></>;
        yesLinks = true;
    } else {
        yesLinks = false;
    }

    pageLinks = yesLinks ? (
        <>
            <>{liveLink}</>
            <>{codeLink}</>
        </>
    ) : (
        <></>
    );

    return (
        <div className={styles.container}>
            <div className={styles.textCont}>
                <div className={`${styles.titleCont} ${styles[`${cat}`]}`}>
                    <h3
                        className={`${styles.title} ${darkerGrotesque.className}`}
                    >
                        {title}
                    </h3>
                    <Image
                        className={styles.image}
                        src={image}
                        alt={altT}
                        width={dimw}
                        height={dimh}
                    ></Image>
                </div>

                <ul className={styles.badges}>{badgeGroup}</ul>
                <div className={styles.links}>{pageLinks}</div>
            </div>
        </div>
    );
}
