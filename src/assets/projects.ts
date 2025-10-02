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
      'A website with many resouces for learning latin, such as declension charts, games, and a translator.',
    technologies: [Tech.nextjs, Tech.ts, Tech.tailwind],
    github: 'https://github.com/cqb13/Learning-Latin',
    website: 'https://learninglatin.net'
  },
  {
    title: 'Talon Games',
    description:
      'A games website for the Sharon Talon Newspaper, featuring crosswords, mini crosswords, and other puzzles.',
    technologies: [Tech.nextjs, Tech.ts, Tech.tailwind],
    github: 'https://github.com/Talon-Games/talon-games',
    website: 'https://games.shstalon.com'
  },
  {
    title: 'Vocab Vault',
    description:
      "A CLI tool for translation between English and Latin, powered by the Whitaker's Words Data.",
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
    technologies: [Tech.nextjs, Tech.ts, Tech.tailwind],
    github: 'https://github.com/cqb13/shs-hackathon',
    website: 'https://hackathon.shsdevs.com/'
  },
  {
    title: 'Meteor Addon List',
    description: 'A website for finding open source Meteor Client Addons.',
    technologies: [Tech.reactjs, Tech.ts, Tech.tailwind, Tech.go],
    github: 'https://github.com/cqb13/meteor-addons',
    website: 'https://meteoraddons.com'
  }
]
