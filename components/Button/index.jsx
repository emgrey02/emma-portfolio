import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export default function Button({ text, link, onClick, size, img, children }) {
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

Button.propTypes = {
    /** Button text */
    text: PropTypes.string,
    /** Optional link, will become [a] tag if so */
    link: PropTypes.string,
    /** Event to execute when button is clicked */
    onClick: PropTypes.func,
    /** size of the button */
    size: PropTypes.string,
};
