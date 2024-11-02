export enum Tech {
  rust = 'rust',
  java = 'java',
  python = 'python',
  ts = 'ts',
  js = 'js',
  html = 'html',
  css = 'css',
  tailwind = 'tailwind',
  reactjs = 'reactjs',
  nextjs = 'nextjs',
  vue = 'vue',
  firebase = 'firebase'
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
    name: 'Tailwind',
    icon: 'tailwind.svg'
  },
  [Tech.reactjs]: {
    name: 'React.js',
    icon: 'react.svg'
  },
  [Tech.nextjs]: {
    name: 'Next.js',
    icon: 'next.svg'
  },
  [Tech.vue]: {
    name: 'Vue.js',
    icon: 'vue.svg'
  },
  [Tech.firebase]: {
    name: 'Firebase',
    icon: 'firebase.svg'
  }
}
