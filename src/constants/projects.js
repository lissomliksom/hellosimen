import Work1 from "../images/work1.png";
import Work2 from "../images/work2.png";
import Work3 from "../images/work3.png";
import Work4 from "../images/work4.png";

export const MAJOR_PROJECTS = [
  {
    title: "Lesekloden frontpage",
    image: Work1,
    description: "The landingpage for Lesekloden.no.",
    details:
      "Minimalistic design with CTAs for Leseklodens two user-groups: Children and teachers.",
    url: "https://www.lesekloden.no",
  },
  {
    title: "Lesekloden themepage",
    image: Work2,
    description: "One of Leseklodens multiple themepages.",
    details:
      "Includes accessible modals and tabbed content for multiple languages. All data fetched with Axios.",
    url: "https://www.lesekloden.no/tema/fugler",
  },
  {
    title: "Lesekloden puzzle game",
    image: Work3,
    description: "One of Leseklodens most popular games.",
    details:
      "Generated math-tasks with 17 levels of difficulty. Reveals images gradually through a grid, depending on selected theme.",
    url: "https://www.lesekloden.no/plusslespill",
  },
  {
    title: "Lesekloden worksheets",
    image: Work4,
    description:
      "Grid-view of Leseklodens free worksheets available for download.",
    details:
      "All data is loaded conditionally via database, dependant on membership status.",
    url: "https://www.lesekloden.no/fag/4",
  },
];

export const MINOR_PROJECTS = [
  {
    title: "Portfolio",
    content: "The page you're currently viewing.",
    tech: "Built with React, HeadlessUI and TailwindCSS.",
    github: "https://github.com/lissomliksom/hellosimen",
    url: false,
  },
  {
    title: "Bestefars blomster",
    content: "A simple responsive image gallery with modals. One-day-project.",
    tech: "Built with React and TailwindCSS.",
    github: "https://github.com/lissomliksom/bestefars-blomster",
    url: "https://bestefar.hellosimen.com/",
  },
  {
    title: "Greyp",
    content:
      "A tool to generate multiple greyscale color palettes for design prototyping. Tweak variables to saturate greys with different RGB-values.",
    tech: "Built with SCSS",
    github: "https://github.com/lissomliksom/greyp",
    url: "https://lissomliksom.github.io/greyp/",
  },
  {
    title: "Rainbow-classless",
    content:
      "Classless CSS-framework: Write semantic HTML and get some basic styling. Includes styles for most common HTML-elements, including typography, tables, forms, images and more.",
    tech: "CSS custom properties / variables",
    github: "https://github.com/lissomliksom/rainbow-classless",
    url: "https://lissomliksom.github.io/rainbow-classless/",
  },
  {
    title: "Printsheet",
    content:
      "When producing custom worksheets for Lesekloden i needed specific styles for print. There are many stylesheets for print out there, but none were a perfect fit. So I created my own.",
    tech: "CSS",
    github: "https://github.com/lissomliksom/printsheet",
    url: false,
  },
  {
    title: "Lesekloden v1",
    content:
      "First version of my main project, Lesekloden.no. Used a lot of custom configurations to Wordpress, including a complete custom design system.",
    tech: "Built with Wordpress and BulmaCSS",
    github: false,
    url: false,
  },
];
