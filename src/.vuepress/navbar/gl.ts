import { navbar } from "vuepress-theme-hope";

export const glNavbar = navbar([
  "/",
  { text: "DWC", icon: "discover", link: "/demo/" },
  { text: "Módulo 1", icon: "discover", link: "/mod1/" },
  { text: "Módulo 2", icon: "discover", link: "/mod2/" },
  {
    text: "Artigos",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "Mazas",
        icon: "edit",
        prefix: "apple/",
        children: [
          { text: "Apple1", icon: "edit", link: "1" },
          { text: "Apple2", icon: "edit", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "Platano",
        icon: "edit",
        prefix: "banana/",
        children: [
          {
            text: "Banana 1",
            icon: "edit",
            link: "1",
          },
          {
            text: "Banana 2",
            icon: "edit",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "Cherry", icon: "edit", link: "cherry" },
      { text: "Dragon Fruit", icon: "edit", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 Docs",
    icon: "note",
    link: "https://theme-hope.vuejs.vuepress/",
  },
]);
