import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
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
          { text: "Html1", icon: "edit", link: "1" }
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
        ],
      },
      { text: "Html", icon: "edit", link: "linguaxehtml" },
      { text: "CSS", icon: "edit", link: "follasdeestiloencascada" },
      { text: "Javascript", icon: "edit", link: "javascript" },
      "tomato",
      "NPM",
    ],
  },
  { text: "Demo", icon: "discover", link: "/demo/" },
  {
    text: "V2 Docs",
    icon: "note",
    link: "https://theme-hope.vuejs.vuepress/",
  },
]);
