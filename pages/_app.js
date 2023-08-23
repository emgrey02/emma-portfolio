import { questrial } from '../styles/fonts';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return (
        <div className={questrial.className}>
            <Component {...pageProps} />
        </div>
    );
}
