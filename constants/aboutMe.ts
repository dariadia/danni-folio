import { AboutMe, JobProjects, Skills } from 'types'

const BIRTHDAY = '06.06.1997'

export const JOB_CARD = 'job-card'
export const JOB_DESCRIPTION = 'job description'
export const JOB_DUTIES = 'job responsibilities'

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
      emoji: '🔮',
    },
    { translationKey: 'nonbinary', emoji: '🏳️‍🌈' },
    { translationKey: 'vegetarian', emoji: '🥦' },
    { translationKey: 'driving_licence', emoji: '🚗' },
  ],
  HOBBIES: [
    { translationKey: 'astrology', emoji: '🌌' },
    { translationKey: 'travel', emoji: '🎒' },
    { translationKey: 'bake', emoji: '🥨' },
    { translationKey: 'algorithms', emoji: '🧮' },
    { translationKey: 'craft', emoji: '🧶' },
    { translationKey: 'archery', emoji: '🏹' },
    { translationKey: 'yoga', emoji: '🧘🏽' },
    { translationKey: 'read', emoji: '📚' },
    { translationKey: 'write_fiction', emoji: '✍🏽' },
  ],
} as const

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

export const BOOKMATE_ACCOUNT_DATE = new Date('03.21.2014')

export const CURRENT_YEAR = new Date().getFullYear()

export const JOB_PROJECTS: JobProjects = {
  SOLO: [
    {
      emoji: '🇷🇺 ',
      name: 'Bookmate Journal',
      link: 'https://journal.bookmate.com/',
      stack: ['Hugo', 'JavaScript', 'SCSS'],
      created: '11.20.2019',
      whatIDo: ['monitor', 'improve', 'interract'],
      proudOf: ['WCAG', 'lighthouse', 'refactored', 'load'],
    },
    {
      emoji: '🇷🇸',
      name: 'Bookmate Zurnal',
      link: 'https://zurnal.bookmate.com/',
      stack: ['Hugo', 'JavaScript', 'SCSS'],
      created: '04.03.2020',
      creator: true,
    },
    {
      emoji: '🇩🇰',
      name: 'Bookmate Journal Denmark',
      link: 'https://journal.bookmate.dk/',
      stack: ['Hugo', 'JavaScript', 'SCSS'],
      created: '02.27.2021',
      creator: true,
    },
    {
      emoji: '📚',
      name: 'Individuum Books',
      link: 'https://individuumbooks.ru/',
      stack: ['Hugo', 'JavaScript', 'SCSS'],
      whatIDo: ['monitor', 'interract'],
    },
    {
      emoji: '🍿',
      name: 'Popcorn Books',
      link: 'https://popcornbooks.me/',
      stack: ['Hugo', 'JavaScript', 'SCSS'],
      whatIDo: ['monitor', 'interract'],
    },
  ],
  TEAM: [
    {
      emoji: '📙',
      name: 'Bookmate',
      link: 'https://bookmate.com/',
      stack: ['React.JS', 'TypeScript', 'Redux', 'Stylus'],
      whatIDo: ['monitor', 'improve', 'add_features', 'refactor'],
    },
    {
      emoji: '📖',
      name: 'Bookmate Web Reader',
      stack: ['React.JS', 'React Select', 'Stylus'],
      whatIDo: ['improve_usability', 'add_features'],
    },
    {
      emoji: '🚀',
      name: 'Bookmate New Web',
      stack: ['Next.JS', 'SWR', 'Styled components'],
      whatIDo: ['create', 'sneak_WCAG'],
    },
    {
      emoji: '🎨',
      name: 'Bookmate canvas',
      stack: ['JavaScript', 'HTML5: canvas'],
      whatIDo: ['add_options'],
    },
  ],
} as const
