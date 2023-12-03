import { sidebar } from "vuepress-theme-hope";

export const glSidebar = sidebar({
  "/": [
    "",
    {
      text: "Guías",
      icon: "note",
     // prefix: "posts/",
      children: "structure",
    },
    "intro",
    "enlaces",
  ],
});
