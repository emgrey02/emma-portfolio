/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
    stories: [
        '../stories/**/*.mdx',
        '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
        '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
};
export default config;
