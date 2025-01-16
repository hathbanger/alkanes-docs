import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Alkanes',
  tagline: 'Alkanes Docs',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://alkanes-docs.oyl.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sandshrewmetaprotocols', // Usually your GitHub org/user name.
  projectName: 'alkanes-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/sandshrewmetaprotocols/alkanes-wiki/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/sandshrew.svg',
    navbar: {
      title: 'Alkanes',
      logo: {
        alt: 'Alkanes Logo',
        src: 'img/alkanelogo.png',
        className: 'navbar-logo',
        style: {
          height: '32px',
          width: 'auto',
        },
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'learnSidebar',
          position: 'left',
          label: 'Learn',
        },
        {
          type: 'docSidebar',
          sidebarId: 'developersSidebar',
          position: 'left',
          label: 'Developers',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Product',
          items: [
            {
              label: 'Documentation',
              to: '/docs/developers/intro',
            },
            {
              label: 'Learn',
              to: '/docs/learn/background/alkanes',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/your-discord-invite',
            },
            {
              label: 'X',
              href: 'https://twitter.com/oylwallet',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sandshrewmetaprotocols',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Oyl Dynamics, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  stylesheets: [
    {
      href: '/css/custom.css',
    },
  ],
};

export default config;
