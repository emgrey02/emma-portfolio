import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.emmagrey.dev',
            lastModified: new Date(),
        },
        {
            url: 'https://www.emmagrey.dev/blog',
            lastModified: new Date(),
        },
        {
            url: 'https://www.emmagrey.dev/contact',
            lastModified: new Date(),
        },
        {
            url: 'https://www.emmagrey.dev/resume',
            lastModified: new Date(),
        },
    ];
}
