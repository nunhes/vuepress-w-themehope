import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "MEGA Bootcamp 2023",
      description: "Lecturas complementarias",
    },
    /*"/gl/": {
      lang: "gl-ES",
      title: "Galego",
      description: "vuepress-theme-hope demo blog",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "博客演示",
      description: "vuepress-theme-hope 的博客演示",
    },*/
  },

  theme,

  shouldPrefetch: false,
});
