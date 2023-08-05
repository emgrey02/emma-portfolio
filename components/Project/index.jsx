import Image from 'next/image';
import { darkerGrotesque } from '../../styles/fonts';
import { Badge } from '../Badge';
import { CodeLink } from '../CodeLink';
import { LiveLink } from '../LiveLink';
import { WaveSurferPlayer } from '../WaveSurferPlayer';
import styles from './Project.module.scss';

export default function Project({ title, image, badges, links, cat, audio }) {
    const badgeGroup = badges.map((badge, index) => {
        return (
            <li key={index}>
                <Badge text={badge.text} theme={badge.theme} />
            </li>
        );
    });

    switch (cat) {
        case 'websites':
            cat = 'web';
            break;
        case 'art':
            cat = 'art';
            break;
        case 'music':
            cat = 'music';
            break;
        default:
            cat = 'design';
            break;
    }

    let dimh;
    let dimw;
    let altT;

    if (cat === 'web') {
        dimh = dimw = 80;
        altT = `${title} logo`;
    } else {
        dimw = 1500;
        dimh = 900;
        altT = `${title}`;
    }

    let display =
        cat !== 'music' ? (
            <Image
                key={title}
                className={styles.image}
                src={image}
                alt={altT}
                width={dimw}
                height={dimh}
            />
        ) : (
            <WaveSurferPlayer
                key={title}
                height={100}
                waveColor="#cc6633"
                progressColor="#2b3347"
                url={audio}
                className={styles.audio}
            />
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
                    <div className={styles.imgCont}>{display}</div>
                </div>

                <ul className={styles.badges}>{badgeGroup}</ul>
                <div className={styles.links}>
                    {links?.live && <LiveLink url={links.live} />}
                    {links?.code && <CodeLink url={links.code} />}
                </div>
            </div>
        </div>
    );
}
