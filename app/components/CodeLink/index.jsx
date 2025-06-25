import Image from 'next/image';
import styles from './CodeLink.module.scss';

export const CodeLink = ({ url }) => {
    return (
        <div className={styles.container}>
            <Image
                src="/images/icons/code.svg"
                alt="brackets representing code"
                height={24}
                width={24}
            ></Image>
            <a className={styles.link} href={url}>
                {url}
            </a>
        </div>
    );
};
