export const navigationLinks = [
  { label: 'Home', path: '#home' },
  { label: 'About me', path: '#about' },
  { label: 'Projects', path: '#projects' },
  { label: 'Skills', path: '#skills' },
  { label: 'Contact', path: '#contact' }
]

export type projectType = {
  name: string
  repo: string
  url: string | false
  image: string
  description: string
  tags: string[]
}

export const projectsData: projectType[] = [
  {
    name: '#VANLIFE',
    repo: 'https://github.com/akurashkevich/van-life',
    url: 'https://taupe-peony-246da2.netlify.app',
    image: 'https://i.ibb.co/mNgP3st/vanlife.jpg',
    description:
      'Single-Page Application for travel truck rental service, featuring 10+ routes, van type filtering, protected and nested routes.',
    tags: ['React', 'React Router', 'SPA', 'API']
  },
  {
    name: 'Chef Claude',
    repo: 'https://github.com/akurashkevich/chef-claude',
    url: 'https://sage-praline-1eea02.netlify.app',
    image: 'https://i.ibb.co/7J4dTmw/chefclaude.jpg',
    description:
      'Recipe app that allows users to input a list of ingredients and, with the click of a button, sends the list to an AI API to generate personalized recipes.',
    tags: ['React', 'AI', 'API']
  },
  {
    name: 'Mesto Project',
    repo: 'https://github.com/akurashkevich/mesto-project-ff',
    url: 'https://akurashkevich.github.io/mesto-project-ff/',
    image: 'https://i.ibb.co/K9fqggx/mesto.jpg',
    description:
      'Interactive website where users can add, delete and like photos, edit their profile and more.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Webpack', 'BEM', 'API']
  },
  {
    name: "It's hard to concentrate",
    repo: 'https://github.com/akurashkevich/slozhno-sosredotochitsya',
    url: 'https://akurashkevich.github.io/slozhno-sosredotochitsya/',
    image:
      'https://i.ibb.co/YcVXwYy/itshardtofocus.jpg',
    description:
      'Responsive website featuring both light and dark themes, using a Mobile-first approach.',
    tags: ['HTML', 'CSS', 'JavaScript', 'BEM']
  },
  {
    name: 'Assembly Endgame',
    repo: 'https://github.com/akurashkevich/assembly-endgame',
    url: 'https://akurashkevich.github.io/assembly-endgame/',
    image:
      'https://i.ibb.co/zmvyZFn/assembly.jpg',
    description:
      'Guess the word within 8 attempts to keep the programming world safe from Assembly.',
    tags: ['React', 'Javascript', 'HTML', 'CSS']
  },
  {
    name: 'Tenzies',
    repo: 'https://github.com/akurashkevich/tenzies',
    url: 'https://akurashkevich.github.io/tenzies/',
    image:
      'https://i.ibb.co/cDVCxMm/tenzies.jpg',
    description: 'Roll until all dice are the same.',
    tags: ['React', 'Javascript', 'HTML', 'CSS']
  }
]

export const skillsData = [
  {
    img: 'react/react-original.svg',
    name: 'React'
  },
  {
    img: 'typescript/typescript-original.svg',
    name: 'TypeScript'
  },
  {
    img: 'javascript/javascript-original.svg',
    name: 'JavaScript'
  },
  {
    img: 'html5/html5-original.svg',
    name: 'HTML'
  },
  {
    img: 'css3/css3-original.svg',
    name: 'CSS'
  },
  {
    img: 'git/git-original.svg',
    name: 'Git'
  },
  {
    img: 'webpack/webpack-original.svg',
    name: 'Webpack'
  },
  {
    img: 'vitejs/vitejs-original.svg',
    name: 'Vite'
  },
  {
    img: 'docker/docker-original.svg',
    name: 'Docker'
  },
  {
    img: 'figma/figma-original.svg',
    name: 'Figma'
  }
]
