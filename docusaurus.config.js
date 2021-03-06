module.exports = {
  title: 'Docs Portal',
  tagline: 'Tools and resources for technical writers',
  url: 'https://docus.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'https://github.com/ivancheban', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
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
    algolia: {
      apiKey: '72758afc606216812733459893710bb',
      indexName: 'ivancheban',
      contextualSearch: true,
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
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ivancheban/docusaurus',
          label: 'GitHub',
          position: 'left',
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
    algolia: {
      apiKey: 'c3d1c2a163e21677b4702a05783f3b2a',
      indexName: 'netlify_c7c3b9a3-6bbb-4267-a65b-33327b5fa63b_master_all',

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
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
