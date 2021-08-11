const BIRTHDAY = '06.06.1997'

type AboutMe = {
  readonly BIRTHDAY: AboutMeFact
  readonly AGE: AboutMeFact
  readonly ZODIAC: AboutMeFact
  readonly EDUCATION: {
    [key: string]: AboutMeEvent
  }
  readonly CAREER: readonly Job[]
  readonly GRANTS: AboutMeEvent
  readonly LANGUAGES: readonly Language[]
  readonly PERSONAL: readonly AboutMeFact[]
  readonly DRIVING: AboutMeFact
}

interface AboutMeFact {
  readonly value?: string | number
  readonly translationKey?: string
  readonly extra?: string
  readonly link?: string
}

interface AboutMeEvent extends AboutMeFact {
  readonly start: string
  readonly finish?: string
  readonly locationKey?: string
  readonly countryKey?: string
  readonly link?: string
}

interface Job extends AboutMeEvent {
  readonly company: string
}

type Language = {
  readonly translationKey: string
  readonly level?: string
  readonly levelKey: string
  readonly emoji?: string
}

export const ABOUT_ME: AboutMe = {
  BIRTHDAY: { value: BIRTHDAY, extra: '9:30 am (GMT+4)' },
  AGE: {
    value: new Date().getFullYear() - new Date(BIRTHDAY).getFullYear(),
  },
  ZODIAC: { value: 'gemini', extra: 'leo' },
  EDUCATION: {
    SCHOOL: {
      translationKey: 'school',
      value: '№120',
      start: '09.01.2004',
      finish: '07.01.2015',
      locationKey: 'samara',
      countryKey: 'russia',
    },
    UNIVERSITY: {
      translationKey: 'HSE',
      link: 'https://www.hse.ru/',
      start: '09.01.2015',
      finish: '07.01.2019',
      locationKey: 'moscow',
      countryKey: 'russia',
    },
    FURTHER_EDUCATION: {
      value: 'GeekBrains University: Mail.Ru Group',
      link: 'https://gb.ru',
      translationKey: 'further_education',
      start: '12.15.2018',
      finish: '12.30.2020',
    },
  },
  CAREER: [
    {
      translationKey: 'customer_support',
      company: 'Bookmate',
      link: 'https://bookmate.com/',
      start: '06.16.2019',
      finish: '02.25.2020',
    },
    {
      translationKey: 'junior_developer',
      company: 'Bookmate',
      link: 'https://bookmate.com/',
      start: '02.25.2020',
      finish: '02.16.2021',
    },
    {
      translationKey: 'developer',
      company: 'Bookmate',
      link: 'https://bookmate.com/',
      start: '02.16.2021',
      finish: '',
    },
  ],
  GRANTS: { translationKey: 'presidential_grant', start: '01.01.2016' },
  LANGUAGES: [
    { translationKey: 'english', level: 'C2', levelKey: 'master', emoji: '🇬🇧' },
    { translationKey: 'russian', levelKey: 'native', emoji: '🇷🇺' },
    {
      translationKey: 'german',
      level: 'B1',
      levelKey: 'intermediate',
      emoji: '🇩🇪',
    },
    {
      translationKey: 'danish',
      level: 'A1',
      levelKey: 'beginner',
      emoji: '🇩🇰',
    },
  ],
  PERSONAL: [
    {
      translationKey: 'wiccan',
      link: 'https://www.history.com/topics/religion/wicca/',
    },
    { translationKey: 'nonbinary' },
    { translationKey: 'vegetarian' },
  ],
  DRIVING: { translationKey: 'driving_licence' },
} as const

type Skills = {
  [key: string]: {
    variants: readonly Skill[]
    emoji?: string
  }
}

type Skill = {
  name: string
  link: string
}

export const SKILLS: Skills = {
  JavaScript: {
    variants: [
      { name: 'React.JS', link: 'https://reactjs.org/' },
      { name: 'Next.JS', link: 'https://nextjs.org/' },
      { name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
      { name: 'Node.JS', link: 'https://nodejs.org/' },
    ],
    emoji: '🟨',
  },
  'React Tools': {
    variants: [
      { name: 'Redux', link: 'https://redux.js.org/' },
      { name: 'SWR', link: 'https://swr.vercel.app/' },
      { name: 'Styled', link: 'https://styled-components.com/' },
      { name: 'React Select', link: 'https://react-select.com/' },
      { name: 'i18next', link: 'https://www.i18next.com/' },
    ],
    emoji: '🌐',
  },
  HTML: {
    variants: [{ name: 'HTML5', link: 'https://html.spec.whatwg.org/' }],
    emoji: '🧱',
  },
  CSS: {
    variants: [
      { name: 'SCSS', link: 'https://sass-lang.com/' },
      { name: 'SASS', link: 'https://sass-lang.com/' },
      { name: 'Stylus', link: 'https://stylus-lang.com/' },
    ],
    emoji: '🎨',
  },
  Tools: {
    variants: [
      { name: 'ESLint', link: 'https://eslint.org/' },
      { name: 'Babel', link: 'https://babeljs.io/' },
      { name: 'Webpack', link: 'https://webpack.js.org/' },
      { name: 'Gulp', link: 'https://gulpjs.com/' },
    ],
    emoji: '🛠',
  },
  Testing: {
    variants: [
      { name: 'Jest', link: 'https://jestjs.io/' },
      { name: 'Cypress', link: 'https://www.cypress.io/' },
    ],
    emoji: '🧪',
  },
  Extra: {
    variants: [
      { name: 'Hugo', link: 'https://gohugo.io/' },
      { name: 'Go', link: 'https://golang.org/' },
      { name: 'MySQL', link: 'https://www.mysql.com/' },
      { name: 'PostgreSQL', link: 'https://www.postgresql.org/' },
      { name: 'Jenkins', link: 'https://www.jenkins.io/' },
      { name: 'Figma', link: 'https://www.figma.com/' },
      { name: 'Photoshop', link: 'https://www.photoshop.com/' },
    ],
    emoji: '🟣',
  },
} as const
