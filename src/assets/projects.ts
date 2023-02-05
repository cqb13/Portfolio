import { Tech } from "./tech";

export type Project = {
  title: string;
  description: string;
  techs: Tech[];
  webURL?: string;
  codeURL: string;
};

const projects: Project[] = [
  {
    title: "Portfolio",
    description: "This website, my portfolio.",
    techs: [Tech.reactjs, Tech.vite, Tech.ts, Tech.css],
    webURL: "https://cqb13.me/",
    codeURL: "https://cqb13.me/"
  },
  {
    title: "Archery Scoring",
    description:
      "Allows you to score archery competitions, and save them, allowing you to view your history and various statistics.",
    techs: [Tech.reactjs, Tech.js, Tech.firebase],
    webURL: "https://archery-scoring-6e188.web.app/",
    codeURL: "https://github.com/cqb13/archery-scoring"
  },
  {
    title: "Learning Latin",
    description:
      "This is a website with a collection of tools and resources to help you learn latin.",
    techs: [Tech.reactjs, Tech.js, Tech.firebase],
    webURL: "https://learninglatin.net",
    codeURL: "https://github.com/cqb13/Learn-Latin"
  },
  {
    title: "Numby Hack",
    description:
      "This is a addon for Meteor client, a Minecraft hacked client. It focuses on giving the user more customization options.",
    techs: [Tech.java],
    codeURL: "https://github.com/cqb13/Numby-hack"
  },
  {
    title: "Tetris",
    description: "This is a simple Tetris game, made in vanilla javascript.",
    techs: [Tech.js, Tech.html, Tech.css],
    codeURL: "https://github.com/cqb13/Tetris",
    webURL: "https://cqb13.me/Tetris/"
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "This is a simple Tic-Tac-Toe game, made in vanilla javascript.",
    techs: [Tech.js, Tech.html, Tech.css],
    codeURL: "https://github.com/cqb13/Tic-Tac-Toe",
    webURL: "https://cqb13.me/Tic-Tac-Toe/"
  },
  {
    title: "Python Hangman",
    description:
      "This is one of the first projects I made, it is a simple hangman game, meant to be played in the console.",
    techs: [Tech.python],
    codeURL: "https://github.com/cqb13/Python-Hangman",
    webURL: "https://replit.com/@cqb13/Python-Hangman?v=1"
  },
  {
    title: "Custom Chrome Tab",
    description:
      "This is a chrome extension that allows you to fully customize your new tab page. You can add your own background, change the tab name, and change the tab icon.",
    techs: [Tech.js, Tech.html, Tech.css],
    codeURL: "https://github.com/cqb13/Custom-Chrome-Tab"
  },
  {
    title: "William Whitaker's Words EXT",
    description:
      "This extension brings back the old William Whitaker's Words website, also allowing you to search for words from the extension",
    techs: [Tech.js, Tech.html, Tech.css],
    codeURL: "https://github.com/cqb13/William-Whitakers-Words-EXT"
  },
  {
    title: "Circles",
    description:
      "This is a simple website I made in my free time, it draws circles on the screen.",
    techs: [Tech.js, Tech.html, Tech.css],
    webURL: "https://cqb13.me/Circles/",
    codeURL: "https://github.com/cqb13/Circles"
  },
  {
    title: "Cool Blocks",
    description:
      "This is a simple website I made while trying to make a frosted glass effect.",
    techs: [Tech.js, Tech.html, Tech.css],
    webURL: "https://cqb13.me/Cool-Blocks/",
    codeURL: "https://github.com/cqb13/Cool-Blocks"
  },
  {
    title: "No More Scrollbars",
    description:
      "This is a chrome extension that removes all scrollbars from any page, because I hate scrollbars.",
    techs: [Tech.js, Tech.html, Tech.css],
    codeURL: "https://github.com/cqb13/No-More-Scrollbar"
  }
];

export default projects;
