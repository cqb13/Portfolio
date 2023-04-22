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
    techs: [Tech.reactjs, Tech.nextjs, Tech.ts, Tech.css],
    img: "https://lh3.googleusercontent.com/pw/AMWts8DSSzVLCqQCpUZjWlrtDbGT0mVx4Z-a0ayDyDR4aEr1pNDN6FMQTBUs4KOAeBhelSkPXV-sHo55WS65JHeiNg6ppLCPBA01Bu_fmuX9gVcM9hAHv51z1zIckslljEyALQKBVb7wCs8ui2vF2FCwOww=w1690-h950-no?authuser=4",
    webURL: "https://learninglatin.net",
    codeURL: "https://github.com/cqb13/Learn-Latin"
  },
  {
    type: "main",
    title: "Archery Scoring",
    description:
      "This website is a tool for scoring archery competitions. I made this website as I could not find any free scoring apps that worked well. While making this website, I greatly improved my React skills, and my ability to use Firebase, I also learned much about website design.",
    techs: [Tech.reactjs, Tech.js, Tech.firebase, Tech.css],
    tags: "WIP",
    img: "https://lh3.googleusercontent.com/pw/AMWts8BL9VMhSnErqqZ-8fCqwZel9CmCNsHN87bRLEP_-KYQAh4_sEbUM99oVNXnTEjd0CFf3IqxVqERRN2fHYNDNqxEK8A64JvJCRQjtQNlhKuXIjjhUat-tk4k-gew8yMe78qjig2EKxR0XuxTmjQ8Lw0=w1690-h950-no?authuser=4",
    webURL: "https://archery-scoring.vercel.app",
    codeURL: "https://github.com/cqb13/archery-scoring"
  },
  {
    type: "main",
    title: "Numby Hack Website",
    description: "This is the website for the Numby Hack, my Meteor Client addon. This website showcases all the features that Numby Hack provides, allows the user to download the addon, and shows various statistics from the github repo.",
    techs: [Tech.reactjs, Tech.vite, Tech.ts, Tech.css, Tech.flask],
    img: "https://lh3.googleusercontent.com/pw/AMWts8DV6XSOn6ECTVLMgdQ036kCEpbiBaJAARfHeHWGcaN9JEasMswDIBdMqQm3iuKsL5zx7GAVswjXn8Oygp_4QGc1NkExiIAplvJYLFtvgnG_WRORFhrhBTsZO_zfQl3WJ728XLCjTT74vorporgTBT8=w1690-h950-no?authuser=4",
    webURL: "https://numbyhack.vercel.app/",
    codeURL: "https://github.com/cqb13/Numby-Hack-Website"
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
    title: "Custom Chrome Tab",
    description:
      "This is a chrome extension that allows you to fully customize your new tab page. You can add your own background, change the tab name, and change the tab icon.",
    techs: [Tech.js, Tech.html, Tech.css],
    codeURL: "https://github.com/cqb13/Custom-Chrome-Tab"
  },
  {
    type: "other",
    title: "William Whitaker's Words EXT",
    description:
      "This extension brings back the old William Whitaker's Words website, also allowing you to search for words from the extension",
    techs: [Tech.js, Tech.html, Tech.css],
    codeURL: "https://github.com/cqb13/William-Whitakers-Words-EXT"
  },
  {
    type: "other",
    title: "Circles",
    description:
      "This is a simple website I made in my free time, it draws circles on the screen.",
    techs: [Tech.js, Tech.html, Tech.css],
    webURL: "https://circles-five.vercel.app/",
    codeURL: "https://github.com/cqb13/Circles"
  },
  {
    type: "other",
    title: "Cool Blocks",
    description:
      "This is a simple website I made while trying to make a frosted glass effect.",
    techs: [Tech.js, Tech.html, Tech.css],
    webURL: "https://cool-blocks.vercel.app/",
    codeURL: "https://github.com/cqb13/Cool-Blocks"
  },
  {
    type: "other",
    title: "No More Scrollbars",
    description:
      "This is a chrome extension that removes all scrollbars from any page, because I hate scrollbars.",
    techs: [Tech.js, Tech.html, Tech.css],
    codeURL: "https://github.com/cqb13/No-More-Scrollbar"
  }
];

export default projects;
