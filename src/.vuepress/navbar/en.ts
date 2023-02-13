import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "Demo", icon: "discover", link: "/demo/" },
  { text: "Módulo 1", icon: "discover", link: "/mf0491_3/" },
  { text: "Módulo 2", icon: "discover", link: "/mf0492_3/" },
  { text: "Módulo 3", icon: "discover", link: "/mf0493_3/" },
  {
    text: "Lecturas",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "HTML",
        icon: "edit",
        prefix: "html/",
        children: [
          { text: "Html1", icon: "edit", link: "1" },
          { text: "Html2", icon: "edit", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "javascript",
        icon: "edit",
        prefix: "javascript/",
        children: [
          {
            text: "javascript 1",
            icon: "edit",
            link: "1",
          },
          {
            text: "javascript 2",
            icon: "edit",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "Flexbox vs Grid", icon: "edit", link: "flexvsgrid" },
      { text: "Dragon Fruit", icon: "edit", link: "dragonfruit" },
      "tomato",
      "NPM",
    ],
  },
  {
    text: "V2 Docs",
    icon: "note",
    link: "https://theme-hope.vuejs.vuepress/",
  },
]);
