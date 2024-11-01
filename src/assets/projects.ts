import { Tech } from './technologies'

export type Project = {
  title: string
  description: string
  technologies: Tech[]
  github?: string
  website?: string
}

export const projects: Project[] = [
  {
    title: 'Learning Latin',
    description: '',
    technologies: [Tech.nextjs, Tech.ts, Tech.tailwind],
    github: 'https://github.com/cqb13/Learning-Latin',
    website: 'https://learninglatin.net'
  },
  {
    title: 'Talon Games',
    description: '',
    technologies: [Tech.nextjs, Tech.ts, Tech.tailwind, Tech.firebase],
    github: 'https://github.com/Talon-Games/talon-games',
    website: 'https://games.shstalon.com/'
  },
  {
    title: 'Vocab Vault',
    description: '',
    technologies: [Tech.rust],
    github: 'https://github.com/cqb13/vocab-vault',
    website: 'https://learninglatin.net/translate'
  },
  {
    title: 'TI Tools',
    description: '',
    technologies: [Tech.rust],
    github: 'https://github.com/cqb13/ti-tools'
  }
]
