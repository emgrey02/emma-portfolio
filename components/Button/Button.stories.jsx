//import component here
import Button from './';

export default {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
        },
    },
};

export const Default = {
    args: {
        text: 'submit',
        link: '',
        size: 'small',
    },
};
