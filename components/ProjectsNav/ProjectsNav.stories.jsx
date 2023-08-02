import ProjectsNav from '.';

export default {
    component: ProjectsNav,
    title: 'Projects Nav',
    argTypes: {
        page: {
            options: ['websites', 'designs', 'art', 'music'],
            control: { type: 'radio' },
        },
    },
};

export const Default = {
    args: {
        page: 'websites',
        categories: ['websites', 'designs', 'art', 'music'],
    },
};
