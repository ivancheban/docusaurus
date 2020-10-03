const path = require('path');
module.exports = {
  title: 'Docs Portal',
  tagline: 'Tools and resources for technical writers',
  url: 'https://docus.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'https://github.com/ivancheban', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  plugins:
    [path.resolve(__dirname, './node_modules/docusaurus-lunr-search/')],
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-162550995-25',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['powershell'],
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Documentation Portal',
      logo: {
        alt: 'Documentation Portal',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/ivancheban/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About me',
          items: [
            {
              label: 'My resume',
              href: 'https://ivanchebancv.now.sh',
            },
            {
              label: 'Tech writer blog',
              href: 'https://techwriter.netlify.app',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Tech writers of Ukraine',
              href: 'https://t.me/TW_Ukraine',
            },
            {
              label: 'Tech writers of Ukraine group in FB',
              href: 'https://www.facebook.com/groups/2030718170543759',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ivancheban/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ivan Cheban. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ivancheban/docusaurus/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ivancheban/docusaurus/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
