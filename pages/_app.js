import { questrial } from '../styles/fonts';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return (
        <main className={questrial.className} style={{ overflowX: 'hidden' }}>
            <Component {...pageProps} />
        </main>
    );
}
