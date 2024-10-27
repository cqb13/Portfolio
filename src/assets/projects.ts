import { Tech } from './technologies'

export type Project = {
  title: string
  description: string
  technologies: Tech[]
  type: 'important' | 'normal'
  image?: string
  github?: string
  website?: string
}

export const projects: Project[] = [
  {
    title: 'Learning Latin',
    description:
      'Learning Latin is a modern, interactive platform designed to make Latin language learning accessible and engaging for users of all levels. With a range of tools from practice charts to a Latin translator and a custom textbook, the platform provides a holistic approach to learning this ancient language.',
    technologies: [Tech.nextjs, Tech.ts, Tech.tailwind],
    type: 'important',
    image:
      'https://lh3.googleusercontent.com/pw/AP1GczNHsvxW3WMLTR13u5XFymOgQarYfmmqjKJsCryxLFHce3yKqYkueO-SifwVYeWOg7pBW0tuWkPUCpY1EUV5i8kYirTkLkiaQq92-Bsp2sZ29zBhp4eETir33P8tJBZTS6onY_gpaNLduO1k9IDcujraJK2LqMmvjoQdPrfe28jgyJIOKeKsYgqbWft2i8ewmoqv7f8tp-4s8lJvsTkJDohEsJHqeK0hpu0Kt9BKlP76U7xivI8YR4zmfhFOaCrSxWEMiNrnLtxnm4l51-bTLwYUwn_OTrttB5RyTgI7cQu0Lu4o-wrqayvD4b5FaD3etHWfcUzFdx9_kXJF1Slq8yxdfjSbOiUZweIJrVXJPPt6Ok9qEuD1r3deRI1bWiUXuPsAMxMg-t9xXbPtaEWi6vH5s3kPRxFRhlXS2tT9CKmGa5kPBxNReobsOUe66EFhS6AdDrwAjWyGpc4Rhr8v4yTiBlFqeFGlDvTTTh5VsFZpcEf7Qfc0Z_uN2ggOlkMTHi7Itm3gOltV79h88-bPdy0YlfIFOasz-EVu8YJeDb5IDqnAhf3kFUzLCdFL0zVxYR4SXR-5LUApdztqPfKVXQD2JTzTKzXWn3NUgThseKjpl2gOthlAAz3BQ11RqL985svM8n55CjwVNwWhDK0wbysvvqDA-1G3O-y_WnujPNBLXk1lQDgbHJWAvuJadso4O5OjMEAack4g7MJbCW-Xwx_RKPZUlZMcLtMo6Ka99PbkkBJR630IM2BIoend5UdqrcDrZAJeDIllRiR4XryqDZIYcvlGxp5vgJ-1N2LRKTI1z_vw1dqU9jYmnIZIiW739HplIgMEI8EECcWynmKgoVApuVc8hsVANRoJ4PAdtg2TxLtnqxoTpkA-sb12kfwTRQr2Xw2W9_dD-m0TzvnYy_MoM6Zbu62eTBxM29Svot7faNWOizHf1hdbtmsq1f97ez-OcuJVZeWMghhFJwRbfG30KPVRcf7cxejvUQ0drFEfsRXVvkMf0mVKcbVFH_3b2sCMwXceroncEo1a5QLg273Llqe_Y2KCMG1v=w3036-h1896-s-no-gm?authuser=3',
    github: 'https://github.com/cqb13/Learning-Latin',
    website: 'https://learninglatin.net'
  },
  {
    title: 'Archery Scoring',
    description:
      'This website is a tool for scoring archery competitions. I made this website as I could not find any free scoring apps that worked well.',
    technologies: [Tech.nextjs, Tech.ts, Tech.tailwind, Tech.firebase],
    type: 'important',
    image:
      'https://lh3.googleusercontent.com/pw/AP1GczOZsc5wEvIn2zELDCkUstKoDU1sf7aQmcKfkLfwdUNd4lSpkWVrYTdfspDl4iumrasALgcWwF6iGgj1b8Nxzk5sYExJ9KpLLbgI1Mda8Akou_BxfIsX7so2F_jllgRdxJ1xz8pjzoo4JZL8onZEDmywHf6D3DqcPBi2mluhMXWXDhfQKz5AY5eOXeSnTYhtYSpLLQOw2xiGsV-K4iOSRFLUQuW7xl1AoUh3_CihKhzI2JkN5XIUB6jIDmPY0MvpcKTYseZITkBVR4COdw_uRHxx5VA9VpOUsjtkerEJpjsxxw_c4IAo-iBt3MHy-e4n0xzZH1IUdgoVd213Rk9K0INs_C8kC-2BGCAyCuLqRLYP5TeDMs9mNicc30wzAWEplrqutrSTWu5mkN67H54iNeecotTSssWlhUCNYfrMu4zHGOmIUbEgr_2eu5EG58Rcm4MzoSjSJVtgF4hrUdZkU--f6V3EFR9UeDXI0Ka0zXsVtC1yKcHMUh0Ps3by1sRVaYXFV3nkPt6lVEyGxHD6CCQUeH2H4I-Ag5lYWOsx6mdOGF4vUzYVDXEHq5ZximE65aetqI-1goX9frx5HEsksynElhIxa3KbvquQwco_VKpQiRQF0b9J9H3-khpfR5pQzm43PaTWPi-ohLVek5EVZEQkhmo7F-oYjLVkI8QvDP8arPpDd5LWl9UsmzZPAeM-uoj3o57HGYRzAg9jHR5jndOAOzBh67dJi6JusB3txufL1PddLxAY8FgTXH90_nEcsvExJw2DN3E_HUS3RWiw8BMRrhIVoIVb-zQz13O_be6oJWIq2ceRJ6EYh49ETZjGdlm3QBQbNMt1ypbo-h4tMKF5NDMuhsvbD-1gPouj6_YiDbIiwifvFHOmUMJP7euEvat8u6-bS451zG9P1mZql44VFa0kHWLqjLJLgMjRmTvVAB9lXrUOqbWY2NNp8TuFXJm6aM1Ub9bjbcissKqpeklHgi6h_91ZNcTJTzf101XdBEeIqQvRJbjlUb5K5ml4iL_rna4KSFZzUSGeUl74rnm2-hTM9DsywCME=w3036-h1896-s-no-gm?authuser=3',
    github: 'https://github.com/cqb13/archery-scoring',
    website: 'https://github.com/cqb13/archery-scoring'
  },
  {
    title: 'Vocab Vault',
    description:
      'A Latin dictionary parser, with two way translation. There is both a CLI and an API, the API is used on learninglatin.net for translation and data for games.',
    technologies: [Tech.rust],
    type: 'important',
    image:
      'https://lh3.googleusercontent.com/pw/AP1GczOk7TsyBGSKCS5xz-mQTyRRhCZddvNE9eFMuNlmQj6KhOi-1dDRUQRMGw8OqQkwDEX6abJbTyJ25Rw_-mU30SZBedF-mSuFErkmesVPm9WPWBiSqB0JyuoW3YY5SkHobAwxyPg6budWA7Xj56ICYoDHZT1J6T0AEAOMvP_9xLmk3ehpr94BRiUq0a9fJtvMduxIxtKoQGdEEkmuPWCZbWK-7OQUOJD9cAx7qRjSQoN_61vJZtLbpa7GH45LDGFJSe_lgjqWA_HeLEm3H2W_xwaDgX3tXWNxfdzLluy4MzT5hPEh5QuTxSFKm2_c6-UnJ-LHen3ZP_eNGwXUK-Kl8YfNn-tN5UML350Rvsen4txcwCFaJWPiUVyTHqpsPN1eMTK2-0e8sAzSSHr8xy6uzvqIJarUWqDgL6KJsio41gRpuQoMoTwux1oLnWvdp7xeawtEw3YaWwZybjsvN7hitIkEST6aooYx_mlWEnv5mvyu4gtZ5tKGCkiDdxL-vS60unU_wbnRqxepyyU4kKmcnes2UVbogK7CBzhAtG291Q2Ygr_jkMG1dNczadCW2OpkkBGLjC3eNN-nUPAtu1uQjWHoMRZgLHOPVis9I1U_wCx-dUzF0vSDuv5p1iybkzH7K5QFrXgKo-bkPcjNGQ2o9kGr01HjqfLivZyi5f6eJVu13R2madUE7zmv-9bhY_ClHAH5zcv4IKyEp5JT-gEp08WGK4DZM5dDOeuaDZrFnDbR515jY0UPAJFKGnJQZacU33NabVXpD8Y5tOo7en_2M9VMHlKUhFia8mlr01I7caLy5IoW17stGUXvEwPatVIJo9FbDvIzdWE6amEmIcgSyo4zQZ3CmUt6b-RHCtRooLRwNh34pFscP9oW_IbbrYrgbnbXdPWUCr3q2_s9lbA6l15JiqUmah9KbvugfKUZGYKXUkOagfUGSP_J8x2ttWFheDPWeTK0IBkLDOhz1cYX8c6dTQbST9paMN50fyO5tbTMlGPz6ISR3m6-ZywfOyZJjsLuB0sqNF2n4CUDXiMT4qCO7DU60c1Fzsta=w3032-h1896-s-no-gm?authuser=3',
    github: 'https://github.com/cqb13/vocab-vault',
    website: 'https://learninglatin.net/translate'
  },
  {
    title: 'TI Tools',
    description:
      'TI Tools is a CLI tool designed for converting 8xp files (used by TI-83 and TI-84 calculators) to text files and vice versa. It also supports various other features for working with 8xp files.',
    technologies: [Tech.rust],
    type: 'normal',
    github: 'https://github.com/cqb13/ti-tools'
  },
  {
    title: 'GitHub Stats',
    description: 'A CLI tool for getting information on github repositories and users.',
    technologies: [Tech.rust],
    type: 'normal',
    github: 'https://github.com/cqb13/github-stats'
  },
  {
    title: 'Numby Hack',
    description:
      'A simple Meteor addon focused on giving users more customization options. Made in honor of Number81.',
    technologies: [Tech.java, Tech.reactjs, Tech.ts, Tech.css],
    type: 'normal',
    github: 'https://github.com/cqb13/Numby-hack',
    website: 'https://numbyhack.cqb13.dev'
  },
  {
    title: 'Folder Map',
    description:
      'Fmap is a CLI written in Rust for displaying a tree-like view of files and directories. It provides functionality to scan directories, create a configuration file, manage ignored directories and files, and more.',
    technologies: [Tech.rust, Tech.ts, Tech.vue, Tech.tailwind],
    type: 'normal',
    github: 'https://github.com/cqb13/fmap',
    website: 'https://foldermap.cqb13.dev/'
  },
  {
    title: 'Custom Chrome Tab',
    description:
      'A chrome extension that allows you to fully customize your new tab page. You can add your own background, change the tab name, and change the tab icon.',
    technologies: [Tech.js, Tech.html, Tech.css],
    type: 'normal',
    github: 'https://github.com/cqb13/Custom-Chrome-Tab',
    website:
      'https://chrome.google.com/webstore/detail/custom-chrome-tab/abbfmpbemldjofokknphnibmcfpjilpi'
  },
  {
    title: 'No More Scrollbars',
    description:
      'A chrome extension that removes all scrollbars from any page, because I hate scrollbars.',
    technologies: [Tech.js, Tech.html, Tech.css],
    type: 'normal',
    github: 'https://github.com/cqb13/No-More-Scrollbar',
    website:
      'https://chromewebstore.google.com/detail/no-more-scrollbar/hglbanhcoepcflipkbeaedghmapoanfd'
  }
]
