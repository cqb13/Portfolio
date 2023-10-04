import { Tech } from "./tech";

export type Project = {
  type: "main" | "other";
  title: string;
  description: string;
  img?: string;
  techs: Tech[];
  tags?: "WIP";
  webURL?: string;
  codeURL: string;
};

const projects: Project[] = [
  {
    type: "main",
    title: "Learning Latin",
    description:
      "This website has a collection of resources for learning Latin. I made this website in order to help me study for my Latin class. While making this website, I learned how to use React, Firebase, and Flask, I later recreated this website using NextJS and typescript.",
    techs: [Tech.nextjs, Tech.ts, Tech.tailwind],
    img: "https://lh3.googleusercontent.com/pw/AJFCJaWMlxGVcDGQtsXzNyW2bqZYng-KrCcMEL3a7oOL7KCYRlnBzb8xJVumwBNUsnZfynCqSW0vwvQdsenszg4Xn5gPatb6P_-E4b0NinELu_JEDPd4MX9m_WceTQnUoF2jJHs8c5pZtsBWa9SQ07Kf6Vc=w1689-h950-s-no?authuser=2",
    webURL: "https://learninglatin.net",
    codeURL: "https://github.com/cqb13/Learning-Latin"
  },
  {
    type: "main",
    title: "Archery Scoring",
    description:
      "This website is a tool for scoring archery competitions. I made this website as I could not find any free scoring apps that worked well. While making this website, I greatly improved my React skills, and my ability to use Firebase, I also learned much about website design.",
    techs: [Tech.nextjs, Tech.ts, Tech.tailwind, Tech.firebase],
    tags: "WIP",
    img: "https://lh3.googleusercontent.com/pw/ADCreHfS7rpDJCPD5HskA7_m3yLF2Owu8db-MP1tTrEJE2UAdtmuUyfrGD7yifULqzncdeemQjj1kjk-z6o2K6cHWRyvG2cjX05CEZnRTcknuNzVlqVinqse6-cYjqFv_1RCmHl6zJdwX36MdJ_gIDUI0uRd=w2208-h1380-s-no?authuser=4",
    webURL: "https://archery.cqb13.dev",
    codeURL: "https://github.com/cqb13/archery-scoring"
  },
  {
    type: "main",
    title: "My Diary Online",
    description:
      "An online diary manager, allowing you to create and personalize your own diaries, and store them securely online.",
    techs: [Tech.nextjs, Tech.ts, Tech.tailwind, Tech.firebase],
    img: "https://lh3.googleusercontent.com/pw/ADCreHcarObqH79kC9Z3Zd1i4rteu_T6zAomi_MrUbxeisPLgqDnSOUP3DAxn7rPFwyXLYSktSk1Y-MGGEEpSXv8AvI7IEoFHPAwswLiBQpdr3qx4jlUYJ2AePE3B9FqyAQ_1UJt115pLfyfc9En9F4n0u7p=w2078-h1300-s-no?authuser=4",
    webURL: "https://diary.cqb13.dev",
    codeURL: "https://github.com/cqb13/diary"
  },
  {
    type: "other",
    title: "Numby Hack",
    description:
      "This is a addon for Meteor client, a Minecraft hacked client. It focuses on giving the user more customization options.",
    techs: [Tech.java],
    codeURL: "https://github.com/cqb13/Numby-hack"
  },
  {
    type: "other",
    title: "Folder Mapper",
    description: "Maps out a folders structure and creates a tree view of it.",
    techs: [Tech.ts, Tech.vue, Tech.tailwind, Tech.vite],
    codeURL: "https://github.com/cqb13/folder-mapper",
    webURL: "https://foldermap.cqb13.dev/"
  },
  {
    type: "other",
    title: "Vocab Vault",
    description: "Latin dictionary parser, with two way translation",
    techs: [Tech.rust],
    codeURL: "https://github.com/cqb13/vocab-vault"
  },
  {
    type: "other",
    title: "Numby Hack Website",
    description:
      "This is the website for the Numby Hack addon for Meteor client.",
    techs: [Tech.reactjs, Tech.ts, Tech.css, Tech.flask],
    codeURL: "https://github.com/cqb13/Numby-Hack-Website",
    webURL: "https://numbyhack.cqb13.dev/"
  },
  {
    type: "other",
    title: "Custom Chrome Tab",
    description:
      "This is a chrome extension that allows you to fully customize your new tab page. You can add your own background, change the tab name, and change the tab icon.",
    techs: [Tech.js, Tech.html, Tech.css],
    codeURL: "https://github.com/cqb13/Custom-Chrome-Tab",
    webURL:
      "https://chrome.google.com/webstore/detail/custom-chrome-tab/abbfmpbemldjofokknphnibmcfpjilpi"
  },
  {
    type: "other",
    title: "No More Scrollbars",
    description:
      "This is a chrome extension that removes all scrollbars from any page, because I hate scrollbars.",
    techs: [Tech.js, Tech.html, Tech.css],
    codeURL: "https://github.com/cqb13/No-More-Scrollbar"
  },
  {
    type: "other",
    title: "Tetris",
    description: "This is a simple Tetris game, made in vanilla javascript.",
    techs: [Tech.js, Tech.html, Tech.css],
    codeURL: "https://github.com/cqb13/Tetris",
    webURL: "https://tetris-murex.vercel.app/"
  },
  {
    type: "other",
    title: "Tic-Tac-Toe",
    description:
      "This is a simple Tic-Tac-Toe game, made in vanilla javascript.",
    techs: [Tech.js, Tech.html, Tech.css],
    codeURL: "https://github.com/cqb13/Tic-Tac-Toe",
    webURL: "https://tic-tac-toe-two-tau.vercel.app/"
  },
  {
    type: "other",
    title: "Python Hangman",
    description:
      "This is one of the first projects I made, it is a simple hangman game, meant to be played in the console.",
    techs: [Tech.python],
    codeURL: "https://github.com/cqb13/Python-Hangman",
    webURL: "https://replit.com/@cqb13/Python-Hangman?v=1"
  },
  {
    type: "other",
    title: "Github Release Downloads",
    description:
      "An API that provides quick access to various information about a specific repositories releases.",
    techs: [Tech.python, Tech.flask],
    codeURL:
      "https://github.com/Templar-Development/Github-Release-Downloads/tree/main"
  }
];

export default projects;
