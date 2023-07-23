import Image from 'next/image';
import { Badge } from '../Badge';
import { CodeLink } from '../CodeLink';
import { LiveLink } from '../LiveLink';
import styles from './Project.module.scss';

export default function Project({ title, image, badges, links }) {
    const badgeGroup = badges.map((badge, index) => {
        let text = badge.text;
        let theme = badge.theme;
        return (
            <li key={index}>
                <Badge text={text} theme={theme} />
            </li>
        );
    });

    return (
        <div className={styles.container}>
            <div className={styles.textCont}>
                <div className={styles.titleCont}>
                    <h3 className={styles.title}>{title}</h3>
                    <Image src={image} alt={`${title} snippet`}></Image>
                </div>

                <ul className={styles.badges}>{badgeGroup}</ul>
                <div className={styles.links}>
                    <LiveLink url={links.live} />
                    <CodeLink url={links.code} />
                </div>
            </div>
        </div>
    );
}
