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
    title: "Portfolio",
    description: "This website is my portfolio, it is my latest creation. To build this website, I used the website design skills I learned while making my archery scoring website. While making this website, I learned how to use Vite, and TypeScript.",
    techs: [Tech.reactjs, Tech.vite, Tech.ts, Tech.css],
    img: "https://lh3.googleusercontent.com/uX_5pG9ZT2GB5rhHQlzAqDluoTnkPY4QB53K9QP2BTr9xhg_zAm5f44PCOB0qge-F0YWCBLpFUDS0j-xgHcx8P816vIgg8QkgggH-rVxYLfOlxbxQJTj3HQm7G-XlmUNSUvK-iaITGNOluBgS5nWpgITkjekyTarg8-qO30qLuPbZFQBXuafplWdJmo_gCmk5VXFel5zOz12NgT9PijNNSKtW366_gW4sDGIpurBJ-3nYd2BdScQAZUlcSQYOSxKA-bsWOnh08_FO2toKmuYHcDG0pJelGXnO0sXps78CsnUmIBtbCVSrIl55G87T2XXHPweCorN5YTwFd7IMbOqA4Pm5Dk9RIkiEDdon_v52FsRMCeZs5XIrC8TplFhApgAja2mtMGhVruXKhnjnlSBT-dgl1qDOFV6Kq1kxJJsbdHPNzQww1Gw_wcF5tTETmpY94bquFxCcuomDJQMxr0blvQiZt5LzHMkV-PIo7rHoVjAEzS4jvI0unHWIWkFACWUz806VQnqVop03FLjucVBruuulQYXBUB8q378qn9tnsX0HqcRqtnKmFhzaO1BjryLC_mqvnk6Wx7OZtlhelxTI5-tdkOgdyoc7-5ErCyZM9F8Fgacc0dbXSI5cqc-CbN2FYanYkFPE9ygmZHerjVoP8pnnxB0-O4_a9Iu9wcdPZGmx4_r6RSgPYegY-73ZxCQ7tAa4KEySLLMqJqIVa3ZOZ9M00ey9EBoCCEIVGQN32DyuVJRcXmgU-NcKmrhHnZez6CXTf8HkqfISArfHn8xe_N34oQSc231fX67sIKxxHykuVF4JJyoOIsKRSpMAumls6jmR0GYwISxJl0YK0VQ3hJGjDD2ad-Yi0zDljYQIUZ5QGC0s9WX7KdQtsTaYeMieBjRg_8XUTiWJvx1epywwBFc_OSLfyaiowgHdBWP0QOsGoe51IXId_Bslry-pkhdePQRKEc84YAtYXPybjZxAMqxbHz_mSy390UD_Q9eqdTHMRTxTKW7gN10jepspkeKSPaU9FBee_W6ZzWGEactVifOC2FgacdOwkXU-QN81dM5M-LhA3tep2QQ=w1690-h950-no?authuser=4",
    webURL: "https://cqb13.me/",
    codeURL: "https://github.com/cqb13/Portfolio"
  },
  {
    type: "main",
    title: "Archery Scoring",
    description:
      "This website is a tool for scoring archery competitions. I made this website as I could not find any free scoring apps that worked well. While making this website, I greatly improved my React skills, and my ability to use Firebase, I also learned much about website design.",
    techs: [Tech.reactjs, Tech.js, Tech.firebase, Tech.css],
    tags: "WIP",
    img: "https://lh3.googleusercontent.com/Lt47xZlH-LHX9PKDMHVXfIeRPeSV97SX-c5BKK521sZWl4CzNvlELzI_LSs_tho8wbe88-t6MFnDJQQVbFQyyK6AUvMCNpl-BITSYRbyXqcQeraW6p13wEnL7i2VkJFXZZC4fz7DJngX-jSD7bMFKhBbcMH16vMLjL4OsQmKNaZm6fTN1P9ppa7Ie-YlVH0J5c_5hOM7YyIbdDWpQGj4ZYEnLQe7lbOt799zO8NjIb_6eVs_iiGNxU3LNI9HzYT3I5V42dkcj_4uxhWoDVuZfgTff3JtmWtw2PHKCfal78sDoqOLWQBFnPVCpoKEpPqXJjq913kvyAPPtQu-DXQ5GtTmWheYr0ANWLUV-R3z6lgOQDPiBGOMAz_PA-iybAwnanrGa5kt7rPkZh9ANFHzNKFnG7b0EqhS_m2DwrolC1Yb4Ga-M2c4WE8ZLH5o1rBbGl_KCkeMR5Zo5rmpsXU5HJ1OfUYYGftxs38mMgIjJc6O68Woc7uJ-T5BtIq-VYvHYcxFr9Uh3eMldE_REHa3CAYnm-Ph1geo5KvJ3DBXeoJpojppzO3WsTL0d2QSHRBu5G9ifR_Tx74u-XBIpQ_FiQvwYNhnsoHf4WGiviennqoYZqFE_0QBFCok_DewA_sJQb0F9nGTGwF8S5rlU-gW9VSgpFAGYFPd9SWJI_qZKMg9nmQ8fciReSNVRJiFTa_e8trmv0YW-D7EHJ3HtHuClbMgJzAo-ViAL4xMvwRPv-zFOHgdRa8CILC7U5-1bzTcdyDxNNbd0hZkyFcR_Ip6liiTsjID5cLw-z7hzf15YzydJSKoBP024OX6L019jPaE9Bbm798o8u5XkxQIXGaUjGBBTRVS5ymEomfKUnUvt5uF59J5Xe4oBaEjBLeByeoH01QiAmHUJmakVi1omLy1aPpo1-GQl7mi88wL7N0IbsSpGGbgftYfRptpNx9oHz-vr36Gsmmq4fU5AkH1nsSbhZdk-V2w6XdromKPo-hZPwL3M64slA4CSZdXyo0CMv8EaeozxD8yXI8vp4L4e7ixGRMHOY8UvNbKTNo0MQadEvVJ-sFNJ3oHPSCg=w1690-h950-no?authuser=4",
    webURL: "https://archery-scoring-6e188.web.app/",
    codeURL: "https://github.com/cqb13/archery-scoring"
  },
  {
    type: "main",
    title: "Learning Latin",
    description:
      "This website has a collection of resources for learning Latin. I made this website in order to help me study for my Latin class. While making this website, I learned how to use React, Firebase, and Flask. ",
    techs: [Tech.reactjs, Tech.js, Tech.firebase, Tech.css],
    img: "https://lh3.googleusercontent.com/EKmrh0nKvDiO0J3Cc7wlq-2UsNKDmX1yCvA2rlNHJ3_-O2RJbVyZYDskwGEGWldp3emQpAyl8_MQEfmMcM_rmq0LE43azKVqqQ4NQxgVzIc00tP9L53tYSbOK3HNd2H0o94ScqhqocpUzv3Ze3fiWTm-LEPO7aeLIv11rHKW-FkyMkX9eVph130Wj095YTleivJigxt9XtHkVtXx3tCb5sV2sI731t9YgesoYKoRy_ITEpcExwCK_Z5ogjpCxKYAq_ZLSbyJQklEZqPTnzvKdX7p5rD4U3SrUmNxZ8kMcHL4pyE9Ym8CQ-aJ1E-iq0aJO4CSyIaIEpge9J8wO5Whs50WzyWovvNCCxXnMTR4Bu1somM4lYYR2TIhSdakXdFMYtaz6iaHFCV3bkLzYeKN-CqojRei5MxvZxCYWV2o4fY-ht3Pm2u933Vgf4e0TK58_l_BjS9NJGBc6b3yWF5AVHwcqIrj028W5fsay5Kq3Rmk4ptM4KdRXQsevy5hOdIQWUCP0Of8G4J7KBbNYveiPpN3w5dlf9IhXJvxlXAmIwhkkVHTXp5Kkmf7-pNq0TjaI1m8ahhUdDf3Tr1afa4WouohoCGOnLo8hONWLQ9NU6AXYOiN6A79rsr0cOwsU8Cw9QhahUz8D_sG7jVY5lQ-nIxxP4_tQRUVn4Sl-0NdYyyp7zDFi-8aFNxP53FxQTaOIXILm35x025SZhlgsUFdrnvFZTZV0XnjihuHi6jOSG9KFa-ZGpVpWXPgU1vPcA_xA2eNUv_waiZAlWnUSdxIk1VuKdix3TU273RPI6aCddIrZAkanhvy9TOJBov1Cw3-0-NmFBIHuOa748pyIdshEZhicSCM42jaJc4rpYsD5NpTIjhWX5uQzx9UOXGnd4WEZM4dolFy682RK8fXfsifjdsuC7Gj6CSy3QqjbCSpEZHWAATnaxl9yB62O--3jQbwZjQK6GKAQITvhw7dEKdpQztVCB91PBAqdMD_xYqg_gXp72HxJuf7g5L0YO33TH5kF-sZs6OUkMayOvhdJaT_jLGGI9bTW6BIjGPqi0aAti4BB8dcIlMvCpYq=w1690-h950-no?authuser=4",
    webURL: "https://learninglatin.net",
    codeURL: "https://github.com/cqb13/Learn-Latin"
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
