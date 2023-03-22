import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Guías",
      icon: "note",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    "enlaces",
  ],
});
