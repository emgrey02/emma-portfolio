import { questrial } from '../styles/fonts';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return (
        <div className={questrial.className} style={{ overflowX: 'hidden' }}>
            <Component {...pageProps} />
        </div>
    );
}
