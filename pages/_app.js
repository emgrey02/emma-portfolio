import '../styles/global.css';
import { questrial } from '../styles/fonts';

export default function App({ Component, pageProps }) {
    return (
        <main className={questrial.className}>
            <Component {...pageProps} />
        </main>
    );
}
