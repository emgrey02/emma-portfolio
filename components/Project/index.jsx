import Image from 'next/image';
import { darkerGrotesque } from '../../styles/fonts';
import { Badge } from '../Badge';
import { CodeLink } from '../CodeLink';
import { LiveLink } from '../LiveLink';
import { WaveSurferPlayer } from '../WaveSurferPlayer';
import styles from './Project.module.scss';

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
    typeof window === 'undefined'
        ? Buffer.from(str).toString('base64')
        : window.btoa(str);

export default function Project({ title, image, badges, links, cat, audio }) {
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
    } else if (cat === 'music') {
        cat = 'music';
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
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer(dimw, dimh),
                        )}`}
                    ></Image>
                    {cat === 'music' && (
                        <WaveSurferPlayer
                            height={100}
                            waveColor="#cc6633"
                            progressColor="#2b3347"
                            url={audio}
                            className={styles.audio}
                        />
                    )}
                </div>

                <ul className={styles.badges}>{badgeGroup}</ul>
                <div className={styles.links}>{pageLinks}</div>
            </div>
        </div>
    );
}
