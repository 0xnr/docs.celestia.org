module.exports = {
  theme: 'cosmos',
  title: 'Celestia Documentation',
  locales: {
    '/': {
      lang: 'en-US'
    },
  },
  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-katex"));
    },
  },
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css",
      },
    ]
  ],
  base: process.env.VUEPRESS_BASE || '/',
  plugins: [
    'vuepress-plugin-element-tabs'
  ],
  themeConfig: {
    repo: 'celestiaorg/docs.celestia.org',
    docsRepo: 'celestiaorg/docs.celestia.org',
    docsBranch: 'main',
    docsDir: '',
    editLinks: true,
    custom: true,
    project: {
      name: 'Celestia',
      denom: 'PHOTON',
      ticker: 'CELES',
      rpc_url: '',
      rpc_url_local: 'http://localhost:8545/',
      chain_id: '9000',
      block_explorer_url: '',
    },
    logo: {
      src: '/celestia_docs_purple.svg',
    },
    algolia: {
      id: 'XXX',
      key: 'XXX',
      index: 'celestia'
    },
    topbar: {
      banner: false
    },
    sidebar: {
      auto: false,
      nav: [
        {
          title: 'Documentation',
          children: [
            {
              title: 'Specifiations',
              directory: true,
              path: '/specs'
            },
            {
              title: 'Rationale',
              directory: true,
              path: '/rationale'
            },
          ]
        }
      ]
    },
    gutter: {
      title: 'Help & Support',
      chat: {
        title: 'Developer Chat',
        text: 'Chat with Celestia developers on Discord.',
        url: 'https://discord.com/invite/YsnTPcSfWQ',
        bg: 'linear-gradient(103.75deg, #1B1E36 0%, #22253F 100%)'
      },
      forum: {
        title: 'Research paper',
        text: 'Learn more about the original Celestia research paper.',
        url: 'https://arxiv.org/abs/1905.09274',
        bg: 'linear-gradient(221.79deg, #3D6B99 -1.08%, #336699 95.88%)',
        logo: ''
      },
      github: {
        title: 'Found an Issue?',
        text: 'Help us improve this page by suggesting edits on GitHub.',
        bg: '#F8F9FC'
      }
    },
    footer: {
      logo: '/celestia-logo.png',
      textLink: {
        url: 'https://celestia.org/'
      },
      services: [
        {
          service: 'github',
          url: 'https://github.com/celestiaorg/'
        },
        {
          service: "twitter",
          url: "https://twitter.com/CelestiaOrg",
        },
        {
          service: "medium",
          url: "https://blog.celestia.org/",
        },
      ],
      smallprint: 'This website is maintained by Celestia',
      links: [{
        title: 'Documentation',
        children: [{
          title: 'Cosmos SDK Docs',
          url: 'https://docs.cosmos.network/master/'
        },
        {
          title: 'Tendermint Core Docs',
          url: 'https://docs.tendermint.com'
        }
        ]
      },
      {
        title: 'Community',
        children: [{
          title: 'Celestia Discord',
          url: 'https://discord.com/invite/YsnTPcSfWQ'
        },
        {
          title: 'Celestia Telegram',
          url: 'https://t.me/CelestiaCommunity'
        }
        ]
      },
      {
        title: 'Celestia',
        children: [
          {
            title: 'Team',
            url: 'https://celestia.org/team'
          }
        ]
      }
      ]
    },
    versions: [
      {
        "label": "main",
        "key": "main"
      },
      {
        "label": "v0.5",
        "key": "v0.5"
      }
    ],
  }
};