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
  readonly PERSONAL: AboutMeFact
  readonly DRIVING: AboutMeFact
}

interface AboutMeFact {
  readonly value?: string | number
  readonly translationKey?: string
  readonly extra?: string
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
  readonly levelKey?: string
}

export const ABOUT_ME: AboutMe = {
  BIRTHDAY: { value: BIRTHDAY, extra: '9:30 am (GMT+4)' },
  AGE: {
    value: new Date().getFullYear() - new Date(BIRTHDAY).getFullYear(),
  },
  ZODIAC: { translationKey: 'zodiac' },
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
    { translationKey: 'english', level: 'C2' },
    { translationKey: 'russian', levelKey: 'native' },
    { translationKey: 'german', level: 'B1' },
    { translationKey: 'danish', level: 'A1' },
  ],
  PERSONAL: { translationKey: 'nonbinary' },
  DRIVING: { translationKey: 'driving_licence' },
} as const
