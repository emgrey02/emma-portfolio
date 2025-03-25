import * as Accordion from '@radix-ui/react-accordion';
import Image from 'next/image';
import { darkerGrotesque } from '../../styles/fonts';
import { Badge } from '../Badge';
import { CodeLink } from '../CodeLink';
import { LiveLink } from '../LiveLink';
import { WaveSurferPlayer } from '../WaveSurferPlayer';
import styles from './Project.module.scss';

export default function Project({
    title,
    image,
    badges,
    links,
    cat,
    audio,
    desc,
}) {
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

    let description =
        desc &&
        desc.map((bullet, index) => {
            return <li key={index}>{bullet}</li>;
        });

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
        <Accordion.Root
            type="single"
            defaultValue="item-1"
            className={styles.container}
            collapsible
        >
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
                {links && (
                    <div className={styles.links}>
                        {links?.live && <LiveLink url={links.live} />}
                        {links?.code && <CodeLink url={links.code} />}
                    </div>
                )}
            </div>
            {desc && (
                <Accordion.Item value="view-desc" className={styles.descCont}>
                    <Accordion.Trigger className={styles.openBtn}>
                        {/* {openDesc ? <span>close</span> : <span>read more</span>} */}
                        <div className={styles.chevron} aria-hidden>
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </Accordion.Trigger>
                    <Accordion.Content className={styles.content}>
                        <ul key={title} className={styles.desc}>
                            {description}
                        </ul>
                    </Accordion.Content>
                </Accordion.Item>
            )}
        </Accordion.Root>
    );
}
