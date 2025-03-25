import './global.css';
import { questrial } from './styles/fonts';

export const metadata = {
    title: 'Home',
    description: 'Welcome to Emma\'s portfolio',
}

export default function AppLayout({ children }) {
    return (
        <html lang='en'>
            <body className={questrial.className}>
                <main>{children}</main>
            </body>
        </html>
    );
}
