import Work1 from "../images/work1.png"
import Work2 from "../images/work2.png"
import Work3 from "../images/work3.png"
import Work4 from "../images/work4.png"


export const MAJOR_PROJECTS = [
  /**
   * Lesekloden
   */
  {
    title: "Lesekloden.no",
    type: "Full-stack project",
    stack: ["Laravel", "PHP", "MySQL", "TailwindCSS", "AlpineJS", "Figma"],
    description: "One of Norway's largest educational websites for teachers and children in primary school. Solo-project, responsible for backend, frontend, design and deployment.",
    url: "https://www.lesekloden.no",
    github: false,
    samples: [
      {
        title: "Lesekloden frontpage",
        image: Work1,
        description: 
          "The landingpage for Lesekloden.no.",
        details:
          "Minimalistic design with CTAs for Leseklodens two user-groups: Children and teachers.",
        url: "https://www.lesekloden.no"
      },
      {
        title: "Lesekloden themepage",
        image: Work2,
        description: 
          "One of Leseklodens multiple themepages.",
        details:
          "Includes accessible modals and tabbed content for multiple languages. All data fetched from JSON with Axios.",
        url: "https://www.lesekloden.no/tema/fugler"
      },
      {
        title: "Lesekloden puzzle game",
        image: Work3,
        description: 
          "One of Leseklodens most popular games, with 25k+ plays monthly.",
        details:
          "Generated math-tasks with 17 levels of difficulty. Reveals images gradually through a grid, depending on selected theme.",
        url: "https://www.lesekloden.no/plusslespill"
      },
      {
        title: "Lesekloden worksheets",
        image: Work4,
        description:
          "Grid-view of Leseklodens free worksheets available for download.",
        details:
          "All data is loaded conditionally via database, determined by membership status.",
        url: "https://www.lesekloden.no/fag/4"
      }
    ]
  },
  /**
   * Blendverse
   */
  {
    title: "Blendverse D&D Planner",
    type: "React",
    stack: ["React", "React Router", "Headless UI", "TailwindCSS"],
    description: "A campaign-planner for Dungeons & Dragons, with multiple useful Dungeon Master-tools. Includes soundboard, image galleries, random  table generators and a day-night-cycle triggered by darkmode.",
    url: "https://dnd.hellosimen.com",
    github: false,
    samples: [
      {
        title: "Lesekloden frontpage",
        image: Work1,
        description: 
          "The landingpage for Lesekloden.no.",
        details:
          "Minimalistic design with CTAs for Leseklodens two user-groups: Children and teachers.",
        url: "https://www.lesekloden.no"
      },
      {
        title: "Lesekloden themepage",
        image: Work2,
        description: 
          "One of Leseklodens multiple themepages.",
        details:
          "Includes accessible modals and tabbed content for multiple languages. All data fetched from JSON with Axios.",
        url: "https://www.lesekloden.no/tema/fugler"
      },
      {
        title: "Lesekloden puzzle game",
        image: Work3,
        description: 
          "One of Leseklodens most popular games, with 25k+ plays monthly.",
        details:
          "Generated math-tasks with 17 levels of difficulty. Reveals images gradually through a grid, depending on selected theme.",
        url: "https://www.lesekloden.no/plusslespill"
      },
      {
        title: "Lesekloden worksheets",
        image: Work4,
        description:
          "Grid-view of Leseklodens free worksheets available for download.",
        details:
          "All data is loaded conditionally via database, determined by membership status.",
        url: "https://www.lesekloden.no/fag/4"
      }
    ]
  }
]

export const MINOR_PROJECTS = [
  {
    title: "Portfolio",
    type: "React",
    stack: ["React", "Headless UI", "TailwindCSS"],
    description: "The page you're currently viewing",
    url: false,
    github: "https://github.com/lissomliksom/hellosimen"
  },
  {
    title: "Bestefars blomster",
    type: "React",
    stack: ["React", "TailwindCSS"],
    description: "A simple responsive image gallery with modals. One-day-project.",
    url: "https://bestefar.hellosimen.com/",
    github: "https://github.com/lissomliksom/bestefars-blomster",
  },
  {
    title: "Greyp",
    type: "SCSS",
    stack: ["SCSS"],
    description: "A tool to generate multiple greyscale color palettes for design prototyping. Tweak variables to saturate greys with different RGB-values.",
    url: "https://lissomliksom.github.io/greyp/",
    github: "https://github.com/lissomliksom/greyp",
  },
  {
    title: "Rainbow-classless",
    type: "CSS",
    stack: ["CSS custom properties"],
    description: "Classless CSS-framework: Write semantic HTML and get some basic styling. Includes styles for most common HTML-elements, including typography, tables, forms, images and more.",
    url: "https://lissomliksom.github.io/rainbow-classless/",
    github: "https://github.com/lissomliksom/rainbow-classless",
  },
  {
    title: "Printsheet",
    type: "CSS",
    stack: ["CSS"],
    description: "When producing custom worksheets for Lesekloden i needed specific styles for print. There are many stylesheets for print out there, but none were a perfect fit. So I created my own.",
    url: false,
    github: "https://github.com/lissomliksom/printsheet",
  },
  {
    title: "Lesekloden V1",
    type: "Full stack",
    stack: ["Wordpress", "PHP", "Javascript", "BulmaCSS"],
    description: "First version of my main project, Lesekloden.no. Used a lot of custom configurations to Wordpress, including a complete custom design system.",
    url: false,
    github: false
  }
]
