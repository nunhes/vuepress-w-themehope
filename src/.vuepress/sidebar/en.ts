import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
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
      text: "DWS",
      icon: "note",
      prefix: "mod1/",
      children: "structure",
    },
    {
      text: "Lectura",
      icon: "note",
      prefix: "posts/",
      link: "posts/",
    },
    "intro",
    "slides",
  ],
});
