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
        {
            url: 'https://www.emmagrey.dev/blog/accessiblebuttons',
            lastModified: new Date(),
        },
        {
            url: 'https://www.emmagrey.dev/blog/fluidtypography',
            lastModified: new Date(),
        },
        {
            url: 'https://www.emmagrey.dev/blog/rightwaytocss',
            lastModified: new Date(),
        },
        {
            url: 'https://www.emmagrey.dev/blog/smoothwebanimations',
            lastModified: new Date(),
        },
        {
            url: 'https://www.emmagrey.dev/blog/themetoggle',
            lastModified: new Date(),
        },
    ];
}
