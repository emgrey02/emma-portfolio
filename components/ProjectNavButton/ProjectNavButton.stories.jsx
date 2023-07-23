import ProjectNavButton from './';

export default {
    component: ProjectNavButton,
    title: 'Project Nav Button',
};

export const Default = {
    args: {
        text: 'websites',
        currentPage: 'art',
    },
};

export const Selected = {
    args: {
        text: 'websites',
        currentPage: 'websites',
    },
};
