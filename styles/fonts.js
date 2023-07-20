import { Questrial, Darker_Grotesque } from 'next/font/google';

const darkerGrotesque = Darker_Grotesque({
	weight: '700',
	subsets: ['latin'],
	variable: '--title-font',
});

const questrial = Questrial({
	weight: '400',
	subsets: ['latin'],
	variable: '--par-font',
});

export { questrial, darkerGrotesque };
