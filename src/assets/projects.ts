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
    description:
      'A modern, interactive platform designed to make Latin language learning accessible and engaging for users of all levels.',
    technologies: [Tech.nextjs, Tech.ts, Tech.tailwind],
    github: 'https://github.com/cqb13/Learning-Latin',
    website: 'https://learninglatin.net'
  },
  {
    title: 'Talon Games',
    description:
      'An interactive games platform built for the Sharon Talon Newspaper, featuring crosswords, mini crosswords, and other puzzles.',
    technologies: [Tech.nextjs, Tech.ts, Tech.tailwind, Tech.firebase],
    github: 'https://github.com/Talon-Games/talon-games',
    website: 'https://games.shstalon.com'
  },
  {
    title: 'Vocab Vault',
    description:
      "A CLI tool that enables translation between English and Latin, powered by the Whitaker's Words Data.",
    technologies: [Tech.rust],
    github: 'https://github.com/cqb13/vocab-vault',
    website: 'https://learninglatin.net/translate'
  },
  {
    title: 'TI Tools',
    description:
      'A CLI tool for converting 8xp files (used by TI-83 and TI-84 calculators) to text files and vice versa, with additional features like renaming and commenting.',
    technologies: [Tech.rust],
    github: 'https://github.com/cqb13/ti-tools'
  },
  {
    title: 'SHS Hackathon Website',
    description:
      'The official website for the SHS Hackathon, a STEM event hosted by the Sharon High School Web Development Club & Girls Who Code.',
    technologies: [Tech.nextjs, Tech.ts, Tech.tailwind, Tech.firebase],
    github: 'https://github.com/cqb13/shs-hackathon',
    website: 'https://hackathon.shsdevs.com/'
  },
  {
    title: 'Folder Mapper',
    description:
      "Generates a visual map of a directory's structure, making it easy to view and analyze folder hierarchies",
    technologies: [Tech.vue, Tech.ts, Tech.tailwind],
    github: 'https://github.com/cqb13/folder-mapper',
    website: 'https://foldermap.cqb13.dev'
  }
]
