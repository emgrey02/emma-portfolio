import { Darker_Grotesque, Questrial } from 'next/font/google';

const darkerGrotesque = Darker_Grotesque({
    weight: ['500', '700'],
    subsets: ['latin'],
    variable: '--title-font',
});

const questrial = Questrial({
    weight: '400',
    subsets: ['latin'],
    variable: '--par-font',
});

export { darkerGrotesque, questrial };
