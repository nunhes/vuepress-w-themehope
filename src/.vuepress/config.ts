import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  //   base: "/",
  base: "/megaboot/",

  locales: {
    "/": {
      lang: "en-US",
      title: "DAW",
      description: "Deseño e programación web agora",
    },
/* "/gl/": {
      lang: "gl-ES",
      title: "Galego",
      description: "vuepress-theme-hope demo blog",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "博客演示",
      description: "vuepress-theme-hope 的博客演示",
    }, */
  },

  theme,

  shouldPrefetch: false,
});
