import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar } from "./navbar/index.js";
import { enSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://ambosass.com/megaboot/",

  author: {
    name: "i.berndz",
    url: "https://ambosass.com",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  // repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "docs",

  blog: {
    medias: {
      // Baidu: "https://example.com",
      // BiliBili: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "info@ambosass.com",
      Facebook: "https://facebook.com/nunhes",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      GitHub: "https://github.com/nunhes",
      // Gitlab: "https://example.com",
      Gmail: "nunhes@gmail.com",
      Instagram: "https://instagram.com/nunhex",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      Linkedin: "https://www.linkedin.com/in/ismaelbernardez/",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      Twitter: "https://twitter.com/nunhes",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
      Nunhes: [
        "https://ambosass.com",
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" style="enable-background:new 0 0 45 45" xml:space="preserve"><path d="M35.4.4c-2.2 0-3.9.7-4.9 2.1C29.4 4 28.8 6.1 28.8 9v.2c-1.6-.7-3.4-1-5.3-1-2.6 0-4.9.6-7 1.6H16.2V9c0-2.9-.5-5-1.6-6.4S11.9.5 9.7.5C7.8.4 6.5 1 5.4 2c-1 1.1-1.5 2.5-1.5 4.4 0 2.4 2.4 5.1 7.3 8.3-2 3.2-3 7.1-3 11.9 0 5.7 1.4 10.1 4.3 13.2s6.8 4.7 11.9 4.7c2 0 3.9-.2 5.6-.5s3.5-.9 5.5-1.8v-2.9c-2.3.9-4.2 1.5-5.8 1.8-1.5.3-3.3.4-5.3.4-4.1 0-7.3-1.3-9.5-3.8s-3.3-6.2-3.4-11h25.3v-2.6c0-4-.8-7.3-2.4-10 4.4-3 6.6-5.6 6.6-7.9 0-1.9-.5-3.3-1.5-4.4-1-.8-2.3-1.4-4.1-1.4zM11.8 24c.2-3 1-5.6 2.1-7.6 1.1.7 2 1.3 2.7 1.9 2.3 1.6 4.3 3.2 5.9 4.7 1.7-1.5 3.6-3.1 5.9-4.7.9-.6 2-1.4 3.4-2.3 1.1 2.1 1.7 4.8 1.7 8H11.8z" style="fill:#699fa0"/></svg>',
      ],
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Desenvolvemento Web 2023",

      displayFooter: true,

      blog: {
        description: "A FrontEnd programmer",
        intro: "/intro.html",
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Chinese locale config
     *
    "/zh/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "默认页脚",

      displayFooter: true,

      blog: {
        description: "一个前端开发者",
        intro: "/zh/intro.html",
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },*/

    /**
     * Galician locale config
     *
    "/gl/": {
      // navbar
      navbar: glNavbar,

      // sidebar
      sidebar: glSidebar,

      footer: "megabootcamp",

      displayFooter: true,

      blog: {
        description: "lecturas complementarias",
        intro: "/gl/intro.html",
      },

      // page meta
      metaLocales: {
        editLink: "Editar esta página en GitHub",
      },
    }, */
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/gl/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: true,

    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    /* comment: {
      **
       * Using Giscus
       *
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
      *
      **
       * Using Twikoo
       *
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      **
       * Using Waline
       *
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",

      **
       * Using artalk
       *
      // provider: "Artalk",
      // site: "artalk-demo",
      // server: "https://demo-artalk.jjdxb.top/",
    },*/

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
