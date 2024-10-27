export enum Tech {
  rust = 'rust',
  java = 'java',
  python = 'python',
  cpp = 'cpp',
  ts = 'ts',
  js = 'js',
  css = 'css',
  html = 'html',
  tailwind = 'tailwind',
  reactjs = 'reactjs',
  nextjs = 'nextjs',
  vue = 'vue',
  firebase = 'firebase',
  vscode = 'vscode'
}

export type Technology = {
  name: string
  icon: string
}

export const technologies = {
  [Tech.rust]: {
    name: 'Rust',
    icon: 'rust.svg'
  },
  [Tech.java]: {
    name: 'Java',
    icon: 'java.svg'
  },
  [Tech.python]: {
    name: 'Python',
    icon: 'python.svg'
  },
  [Tech.cpp]: {
    name: 'C++',
    icon: 'cpp.svg'
  },
  [Tech.ts]: {
    name: 'TypeScript',
    icon: 'typescript.svg'
  },
  [Tech.js]: {
    name: 'JavaScript',
    icon: 'javascript.svg'
  },
  [Tech.css]: {
    name: 'CSS',
    icon: 'css.svg'
  },
  [Tech.html]: {
    name: 'HTML',
    icon: 'html.svg'
  },
  [Tech.tailwind]: {
    name: 'Tailwind CSS',
    icon: 'tailwind.svg'
  },
  [Tech.reactjs]: {
    name: 'React.js',
    icon: 'react.svg'
  },
  [Tech.nextjs]: {
    name: 'Next.js',
    icon: 'nextjs.svg'
  },
  [Tech.vue]: {
    name: 'Vue.js',
    icon: 'vue.svg'
  },
  [Tech.firebase]: {
    name: 'Firebase',
    icon: 'firebase.svg'
  },
  [Tech.vscode]: {
    name: 'VS Code',
    icon: 'vscode.svg'
  }
}
