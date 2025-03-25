import styles from './Loader.module.scss';

export default function Loader({ visibility }) {
    return (
        <div className={`${styles.loader} ${styles[`${visibility}`]}`}></div>
    );
}
