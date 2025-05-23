import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Documentación Demo',
  tagline: 'Ejemplo práctico de documentación como código',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://dev-german.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docu-demo',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dev-german', // Usually your GitHub org/user name.
  projectName: 'docu-demo', // Usually your repo name.
  deploymentBranch: "gh-pages",

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
          docItemComponent: "@theme/ApiItem",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/dev-german/docu-demo/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/dev-german/docu-demo/tree/main/',
          // Useful options to enforce blogging best practices
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
    // Replace with your project's social card
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true
      }
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Inicio',
      logo: {
        alt: 'Sunat Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentación',
        },
        {
          type: "dropdown",
          label: "APIs",
          position: "left",
          items: [
            {
              label: "API SIAD",
              to: "docs/category/siad-api",
            },
          ]
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/dev-german/docu-demo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentación',
              to: '/docs/informe-definicion',
            },
          ],
        },
        {
          title: 'Community',
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
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java']
    },
    languageTabs: [
      {
        highlight: "java",
        language: "java",
        logoClass: "java",
        variant: "unirest",
      },
      {
        highlight: "bash",
        language: "curl",
        logoClass: "curl",
      },    
      {
        highlight: "javascript",
        language: "javascript",
        logoClass: "javascript",
      },
    ],
    
  } satisfies Preset.ThemeConfig,

  themes:[
    '@docusaurus/theme-mermaid',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        
      },
    ],
    "docusaurus-theme-openapi-docs",
  ],
  markdown: {
    mermaid: true
  },

  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
    ['docusaurus-plugin-openapi-docs',
      {
        id: "apiDocsSIAD", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          siad_api: {
            specPath: "openapi/openapi-siad.yaml",
            outputDir: "docs/api/siad",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            downloadUrl: "/openapi/openapi-siad.yaml"
          } satisfies OpenApiPlugin.Options,
        }
      },
    ]
  ],
  
};

export default config;
