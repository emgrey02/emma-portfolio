import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Emma Grey Portfolio Website',
        short_name: 'Emma Grey',
        description:
            'Personal website of Emma Grey, a web developer and designer.',
        start_url: '/',
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/icon0.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
            {
                src: '/icon1.png',
                sizes: '96x96',
                type: 'image/png',
            },
            {
                src: '/apple-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
        dir: 'ltr',
        lang: 'en-US',
    };
}
