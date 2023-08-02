import Project from '.';

export default {
    component: Project,
    title: 'Project',
};

export const Default = {
    args: {
        title: 'jam house',
        badges: [
            { text: 'web developer', theme: 'role' },
            { text: 'ui/ux designer', theme: 'role' },
            { text: 'tone.js', theme: 'tech' },
            { text: 'html', theme: 'tech' },
            { text: 'scss', theme: 'tech' },
            { text: 'javascript', theme: 'tech' },
            { text: 'netlify', theme: 'tech' },
            { text: 'github', theme: 'tech' },
        ],
        links: {
            live: 'jam-house.netlify.app',
            code: 'github.com/emgrey02/idmx-music-app-plus',
        },
        image: '/images/jam-house-logo.svg',
    },
};
