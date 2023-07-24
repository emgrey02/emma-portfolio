import Image from 'next/image';
import { darkerGrotesque } from '../../styles/fonts';
import { Badge } from '../Badge';
import { CodeLink } from '../CodeLink';
import { LiveLink } from '../LiveLink';
import styles from './Project.module.scss';

export default function Project({ title, image, badges, links }) {
    const badgeGroup = badges.map((badge, index) => {
        return (
            <li key={index}>
                <Badge text={badge.text} theme={badge.theme} />
            </li>
        );
    });

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
                <div className={styles.titleCont}>
                    <h3
                        className={`${styles.title} ${darkerGrotesque.className}`}
                    >
                        {title}
                    </h3>
                    <Image
                        className={styles.image}
                        src={image}
                        alt={`${title} snippet`}
                        width={80}
                        height={80}
                    ></Image>
                </div>

                <ul className={styles.badges}>{badgeGroup}</ul>
                <div className={styles.links}>{pageLinks}</div>
            </div>
        </div>
    );
}
