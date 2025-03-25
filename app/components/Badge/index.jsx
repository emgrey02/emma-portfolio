import styles from './Badge.module.scss';

export const Badge = ({ text, theme }) => {
    return (
        <div className={`${styles.badge} ${styles[`${theme}`]}`}>
            <div>{text}</div>
        </div>
    );
};
