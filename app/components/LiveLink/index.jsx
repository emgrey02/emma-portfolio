import Image from 'next/image';
import styles from './LiveLink.module.scss';

export const LiveLink = ({ url }) => {
    return (
        <div className={styles.container}>
            <Image
                alt="Link"
                src="/images/link.svg"
                height={24}
                width={24}
            ></Image>
            <a href={url} className={styles.link}>
                {url}
            </a>
        </div>
    );
};
