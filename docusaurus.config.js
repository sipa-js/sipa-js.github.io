// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Sipa',
    tagline: '!!! <under heavy construction> !!!',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/sipa/favicon.svg',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'sipa-js', // Usually your GitHub org/user name.
    projectName: 'sipa-js.github.io', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    trailingSlash: false,

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/sipa-js/sipa-js.github.io/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/sipa-js/sipa-js.github.io/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        {
            navbar: {
                title: 'SIPA',
                logo: {
                    alt: 'My Site SIPA',
                    src: 'img/sipa/favicon.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'guides/overview',
                        position: 'left',
                        label: 'Guides',
                    },
                    {
                        type: 'doc',
                        docId: 'api/api',
                        position: 'left',
                        label: 'API',
                    },
                    {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href: 'https://github.com/sipa-js/sipa-js.github.io',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'News',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/sipa-js',
                            }
                        ],
                    },
                    {
                        title: 'Network',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/sipa-js/sipa-js.github.io',
                            },
                        ],
                    },
                ],
                copyright: `<small style="color: #ffc005">Copyright © ${new Date().getFullYear()} by Contributors (LGPLv3). Built with Docusaurus.</small>`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme
            },
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
                respectPrefersColorScheme: true,
            }
        },
};

module.exports = config;
