import { sidebar } from "vuepress-theme-hope";

export const glSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "DWC",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Artigos",
      icon: "note",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
});
