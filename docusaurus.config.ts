import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SmartPay Docs',
  tagline: 'Documentation officielle SmartPay',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://ton-utilisateur.github.io',
  baseUrl: '/smartpay-docs/',

  organizationName: 'abdoulbancole', 
  projectName: 'smartpay-docs', 

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/smartpay/smartpay-docs/edit/main/', // 👈 Modifie selon ton repo
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/smartpay/smartpay-docs/edit/main/blog/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'SmartPay Docs',
      logo: {
        alt: 'SmartPay Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Blog',
          to: '/docs/intro', // ✅ Redirige vers intro.md
          position: 'left',
        },
        {
          href: 'https://github.com/smartpay/smartpay-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Commencer',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Communauté',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X (ex-Twitter)',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'Autres',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/smartpay/smartpay-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SmartPay. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;