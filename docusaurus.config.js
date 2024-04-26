// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Extreal R3F",
  tagline: "React Three Fiber(R3F) のナレッジとリファレンス",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://extreal-dev.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/extreal-r3f-guide",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "extreal-dev", // Usually your GitHub org/user name.
  projectName: "extreal-r3f-guide", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: true,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/fintan-logo.jpg",
      navbar: {
        title: "",
        logo: {
          alt: "Fintan Logo",
          src: "img/fintan-logo.jpg",
          href: "https://fintan.jp",
        },
        items: [
          {
            href: "/",
            label: "Extreal R3F",
            position: "left",
          },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://fintan.jp/blog-category/xr/",
            label: "Fintan - XR",
            position: "right",
          },
          {
            href: "https://github.com/extreal-dev",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "License",
            items: [
              {
                label: "Apache License 2.0",
                href: "https://www.apache.org/licenses/LICENSE-2.0",
              },
            ],
          },
          {
            title: "Feedback",
            items: [
              {
                label: "GitHub Issues",
                href: "https://github.com/extreal-dev",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                html: `
                    <a class="footer__link-item" href="javascript:void(0);" onclick="goTermsOfUse()">Terms of Use</a>
                `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TIS, Inc. Built with Docusaurus.<br/><small>本サイトに掲載されている商品またはサービスなどの名称は各社の商標または登録商標です。</small>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["typescript"],
      },
      zoom: {
        selector: ".markdown :not(em) > img",
        config: {
          background: {
            light: "rgb(255, 255, 255)",
            dark: "rgb(50, 50, 50)",
          },
        },
      },
    }),

  plugins: [require.resolve("docusaurus-plugin-image-zoom")],

  scripts: [
    {
      src: "https://plausible.io/js/script.js",
      defer: true,
      "data-domain": "extreal-dev.github.io,all.fintan",
    },
    "/extreal-r3f-guide/js/custom.js",
    // "/extreal-r3f-guide/en/js/custom.js",
  ],

  themes: ["@docusaurus/theme-mermaid"],
  // In order for Mermaid code blocks in Markdown to work,
  // you also need to enable the Remark plugin with this option
  markdown: {
    mermaid: true,
  },
};

export default config;
