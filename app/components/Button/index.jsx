import styles from './Button.module.scss';

export default function Button({
    text,
    link = '',
    onClick = '',
    size = '',
    img = '',
    children = '',
}) {
    return (
        <div>
            {link ? (
                <a
                    className={`${styles.button} ${styles[`${size}`]}`}
                    href={link}
                >
                    {img ? children : text}
                </a>
            ) : (
                <button
                    onClick={onClick}
                    className={`${styles.button} ${styles[`${size}`]}`}
                >
                    {text}
                </button>
            )}
        </div>
    );
}
